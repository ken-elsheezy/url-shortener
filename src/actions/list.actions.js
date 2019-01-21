import { 
    LIST_ERROR,
    RETRIEVE,
    BEFORE_LIST_RESULT, 
} from './types';
import {
    getLinks
} from '../services';


/**
 * Goes ahead to activate the loader
 */
export const beforeFetchResult = () => {
    return {
        type:BEFORE_LIST_RESULT, 
        payload:null
    }
}


/**
 * This retrieves all the persisted/stored
 * bitlinks
 */
export const retrieveResources = () => {

    return async function(dispatch){
        try{
            const response = getLinks();
            dispatch({type:RETRIEVE, payload: response.result});
        }catch(e){
            dispatch({type:LIST_ERROR, payload: e.message});
        }
    }
}