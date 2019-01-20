import { 
    BEFORE_GENERAL_ANALYTICS_RESULT,
    GENERAL_ANALYTICS,
    GENERAL_ANALYTICS_ERROR
} from '../actions/types';


const initialState = {
    loading: false,
    analytics: {},
    error_message: null
}


export default function(state = initialState, action){

    switch(action.type){
        case BEFORE_GENERAL_ANALYTICS_RESULT:
            return Object.assign({}, state, {loading: true});
        case GENERAL_ANALYTICS: 
            return Object.assign({}, state, {
                loading: false, 
                analytics: action.payload
            });
        case GENERAL_ANALYTICS_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                error_message: action.payload
            });    
        default:
          return state;
    }
}