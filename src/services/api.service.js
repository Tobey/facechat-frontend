import config from '../config';

import { authenticationService } from './auth.service';
import { handleResponse } from '../helpers/handle-response';


export const apiService = {
    payForSession,

};

function payForSession(influencerUsername) {

    console.log('Pay ', influencerUsername)
    authenticationService.refresh()
    const requestOptions = {
        method: 'GET',
        headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${authenticationService.accessToken}`
        }
    };

    return fetch(`${config.PAYTOK_URL}/api/influencer/${influencerUsername}/pay/`, requestOptions)
        .then(handleResponse)
        .then(data => {
            console.log('paying for session ', data)
            return data
        });


}