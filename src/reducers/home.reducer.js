import { 
    BEFORE_RESULT,
    SHORTEN_URL,
    ERROR 
} from '../actions/types';

const initialState = {
    loading: false,
    resource: {},
    error_message: null
}


export default function(state = initialState, action){

    switch(action.type){
        case BEFORE_RESULT:
            return Object.assign({}, state, {loading: true});
        case SHORTEN_URL: 
            return Object.assign({}, state, {
                loading: false, 
                resource: action.payload
            });
        case ERROR:
            return Object.assign({}, state, {
                loading: false, 
                error_message: action.payload
            });    
        default:
          return state;
    }
  }