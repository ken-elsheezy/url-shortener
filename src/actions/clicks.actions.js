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



export const beforeFetchResult = () => {
    return {
        type:BEFORE_CLICK_ANALYTICS_RESULT
    }
}


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
            console.log('Clicks Components Response: ', response.data); 
            dispatch({type:CLICK_ANALYTICS, payload:response.data});
        }catch(e){
            dispatch({type: CLICK_ANALYTICS_ERROR , payload:e});
        }
    }
}