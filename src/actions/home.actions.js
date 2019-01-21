import axios from 'axios';
import {
    API_BASE_URL,
    TOKEN
} from '../config';
import { 
    BEFORE_RESULT,
    SHORTEN_URL,
    RESET,
    ERROR,
    PERSIST,
    RETRIEVE 
} from './types';
import {
    addLink, 
    getLinks
} from '../services';



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
    if(longURL === ""){
        return {type:ERROR, payload: 'Insert a url'};
    }else{
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

}

export const persistResource = (resource) => {
    //write a service to accept & save the persisted resource
    //console.log('Consoling here: ', resource);
    return async function(dispatch){
        try{
            const response = await addLink(resource);
            dispatch({type:PERSIST, payload: response});
        }catch(e){
            dispatch({type:ERROR, payload: e});
        }
    }
    
    
}