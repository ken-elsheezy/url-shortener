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
    RETRIEVE,
    BUTTON_LOADER 
} from './types';
import {
    addLink, 
    getLinks
} from '../services';
const urlRegex = require('url-regex');


/**
 * This functions triggers a re-render, thereby
 * clearing some components off the page
 */
export const resetChildComponent = () => {
    return {
        type:RESET
    }
}


/**
 * This functions goes ahead to activate the 
 * button loader
 */
export const activateButtonLoader = () => {
    return async function(dispatch) {
        
        dispatch({type:BUTTON_LOADER});  
    }
}


/**
 * This functions goes ahead to set the 
 * spinning loader
 */
export const beforeFetchResult = () => {
    return async function(dispatch) {
        dispatch({type:BEFORE_RESULT});
    }
}


/**
 * This function accepts a longURL string
 * that it uses to query a url shortening API
 * It then returns an action of type SHORTEN_URL and
 * payload of the resource Object
 * 
 * @param  longURL (String)
 */
export const getShortenedUrl = (longURL) => {
    
    if(longURL === "" || !urlRegex({exact: true}).test(longURL)){
        return {type:ERROR, payload: 'Insert a valid url, example https://google.com'};
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

                dispatch({type:SHORTEN_URL, payload: response.data});

            }catch(e){
                dispatch({type:ERROR, payload: e.message});
            }
        }
    }

}


/**
 * This function first takes in a URL object and 
 * saves it in localStorage via addLink(resource)
 * Then it proceeds to emit an action containing 
 * a payload with a status and message
 * 
 * @param resource (Object)
 */
export const persistResource = (resource) => {
    
    return async function(dispatch){
        try{

            const response = await addLink(resource);
            dispatch({type:PERSIST, payload: response});

        }catch(e){
            dispatch({type:ERROR, payload: e.message});
        }
    }   
}