import axios from 'axios';
import {
    API_BASE_URL,
    TOKEN
} from '../config';
import { 
    BEFORE_CLICK_ANALYTICS_RESULT,
    CLICK_ANALYTICS,
    CLICK_ANALYTICS_ERROR 
} from './types';


/**
 * This action goes ahead to trigger the loader
 */
export const beforeFetchResult = () => {
    return {
        type:BEFORE_CLICK_ANALYTICS_RESULT
    }
}


/**
 * This function accepts a bitlink string
 * which it in turn uses to obtain Click analytics.
 * 
 * @param bitlink (String)
 */
export const getClicksAnalytics = (bitlink) => {
    return async function(dispatch){
        try{
            const Authorize = 'Bearer '.concat(TOKEN);
            let header = { 
                headers: { 
                    Authorization: Authorize 
                } 
            }; 

            const response = await axios.get(
                API_BASE_URL + 'bitlinks/' + bitlink + '/clicks/summary', header);

            dispatch({type:CLICK_ANALYTICS, payload:response.data});
        }catch(e){
            dispatch({type: CLICK_ANALYTICS_ERROR , payload:e.message});
        }
    }
}