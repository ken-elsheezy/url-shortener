import { 
    BEFORE_CLICK_ANALYTICS_RESULT,
    CLICK_ANALYTICS,
    CLICK_ANALYTICS_ERROR
} from '../actions/types';

const initialState = {
    loading: false,
    analytics: {},
    error_message: null
}


export default function(state = initialState, action){

    switch(action.type){
        case BEFORE_CLICK_ANALYTICS_RESULT:
            return Object.assign({}, state, {loading: true});
        case CLICK_ANALYTICS: 
            return Object.assign({}, state, {
                loading: false, 
                analytics: action.payload
            });
        case CLICK_ANALYTICS_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                error_message: action.payload
            });    
        default:
          return state;
    }
  }