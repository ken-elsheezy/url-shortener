import axios from 'axios';
import {
    API_BASE_URL,
    TOKEN
} from '../config';
import { 
    BEFORE_RESULT,
    SHORTEN_URL,
    RESET,
    ERROR 
} from './types';



export const resetChildComponent = () => {
    return {
        type:RESET
    }
}

export const beforeFetchResult = () => {
    return {
        type:BEFORE_RESULT, 
        payload:null
    }
}

export const getShortenedUrl = (longURL) => {

    return async function(dispatch){
        try{

            let headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + TOKEN 
            }  

            const response = await  axios.post(
                API_BASE_URL+'shorten', 
                {long_url : longURL}, 
                {headers: headers}
            );

            console.log(response);

            dispatch({type:SHORTEN_URL, payload: response.data});

        }catch(e){
            dispatch({type:ERROR, payload: e});
        }
    }

}

export const persistResource = () => {
    //write a service to accept & save the persisted resource
}

export const viewAllResources = () => {
    //write a service to view all the persisted resources
}