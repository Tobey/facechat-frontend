import { authenticationService } from '../services/auth.service';


export function Fetch(url, options) {
    const expired = authenticationService.isExpired()
    if (expired) {
        console.log('token exp')
        authenticationService.refresh()
    } else {
        console.log('not exp')

    }

    let headers = authenticationService.authHeader()
    if (options && options.headers) {
        headers = Object.assign({}, options.headers, headers);
        options.headers = headers
    } else {
        options = {
            headers
        }
    }
    console.log('headers ', headers);
    console.log('url ', url);
    console.log('options ', options);
    return fetch.apply(this, [url, options, ...arguments]) 
}