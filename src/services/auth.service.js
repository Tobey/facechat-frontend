import { BehaviorSubject } from 'rxjs';

import { webSocket } from '@akanass/rx-socket-client';

import config from '../config';
import { handleResponse } from '../helpers/handle-response';

var jwtDecode = require('jwt-decode');

const Auth = new BehaviorSubject(JSON.parse(localStorage.getItem('auth')));

// const Ws = webSocket(`${config.PAYTOK_WS_URL}/paytok/?${Auth.auth}`);yarn add @akanass/rx-socket-clien√



export const authenticationService = {
    login,
    logout,
    refresh,
    authHeader,
    isExpired,
    auth: Auth.asObservable(),
    get currentUser() { return Auth.value && Auth.value.data.user_id },
    get accessToken() { return Auth.value &&  Auth.value.access },
    get refreshToken() { return  Auth.value &&  Auth.value.refresh },
    get tokenExp() { return  Auth.value &&  Auth.value.data.exp }
    // get WebSoc
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'email': username, password })
    };

    return fetch(`${config.PAYTOK_URL}/api/auth/jwt/create/`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log('login ;)')

            const parsedData = jwtDecode(data.access)
            const auth = {
                'access': data.access,
                'refresh': data.refresh,
                'data': parsedData,
            }
            localStorage.setItem('auth', JSON.stringify(auth));
    
            Auth.next(auth);
            console.log(Auth)
            return auth;
        });
}

function logout(){
    // remove user from local storage to log user out
    localStorage.removeItem('auth');
    Auth.next(null);
}


function refresh() {
    // remove user from local storage to log user out
    let auth = JSON.parse(localStorage.getItem('auth'))
    if (isExpired()) {
        console.log('REFRESHHHING ACCESS TOKEN', auth)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'refresh': auth.refresh })
        };
        console.log('refreshh the ting' ,requestOptions, { 'refresh': auth.refresh })
        return fetch(`${config.PAYTOK_URL}/api/auth/jwt/refresh/`, requestOptions)
            .then(handleResponse)
            .then(data => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log('refresh api data', data)
                const parsedData = jwtDecode(data.access)
                data.data = parsedData
                auth = Object.assign({}, auth, data);
                localStorage.setItem('auth', JSON.stringify(auth));
                Auth.next(auth);
                return data;
            });
    }
}


function authHeader() {
    // return authorization header with jwt token
    if (authenticationService.accessToken) {
        return { Authorization: `Bearer ${authenticationService.accessToken}` };
    } else {
        return {};
    }
}

function isExpired() {
    // return authorization header with jwt token
    if (authenticationService.tokenExp && authenticationService.tokenExp < Date.now() / 1000 ) {
        return true
    } else {
        return false
    }
}
