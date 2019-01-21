import { 
    BEFORE_RESULT,
    SHORTEN_URL,
    ERROR,
    RESET,
    PERSIST 
} from '../actions/types';

const initialState = {
    loading: false,
    resource: {},
    message: null,
    msg_type: '',
    display: false
}


export default function(state = initialState, action){

    switch(action.type){
        case RESET:
            return Object.assign({}, state, {resource: {}, display: false});
        case BEFORE_RESULT:
            return Object.assign({}, state, {loading: true, display: false});
        case SHORTEN_URL: 
            return Object.assign({}, state, {
                loading: false, 
                resource: action.payload
            });
        case ERROR:
            return Object.assign({}, state, {
                loading: false, 
                message: action.payload,
                display: true
            }); 
        case PERSIST:
            return Object.assign({}, state, {
                msg_type: action.payload.status,
                message: action.payload.msg,
                display: true
            });    
        default:
          return state;
    }
  }