import axios from 'axios';
import {
    API_BASE_URL,
    TOKEN
} from '../config';
import { 
    BEFORE_GENERAL_ANALYTICS_RESULT,
    GENERAL_ANALYTICS,
    GENERAL_ANALYTICS_ERROR 
} from './types';


/**
 * This action goes ahead to trigger the loader
 */
export const beforeFetchResult = () => {
    return {
        type:BEFORE_GENERAL_ANALYTICS_RESULT
    }
}


/**
 * This function accepts the bitlink parameter  
 * which it inturn uses to obtain general analytics of the 
 * bitlink
 * @param  bitlink (String)
 */
export const getGeneralAnalytics = (bitlink) => {
    return async function(dispatch){
        try{
            const Authorize = 'Bearer '.concat(TOKEN);
            let header = { 
                headers: { 
                    Authorization: Authorize 
                } 
            };
            
            const response = await axios.get(
                API_BASE_URL + 'bitlinks/' + bitlink , header);
            console.log('General Info Response: ', response.data);    
            dispatch({type: GENERAL_ANALYTICS, payload:response.data});
        }catch(e){
            dispatch({type: GENERAL_ANALYTICS_ERROR , payload:e.message});
        }
    }
}