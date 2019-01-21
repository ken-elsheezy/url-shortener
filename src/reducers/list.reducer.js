import { 
    LIST_ERROR,
    RETRIEVE,
    BEFORE_LIST_RESULT,
} from '../actions/types';

const initialState = {
    loading: false,
    array: [],
    message: null,
    msg_type: '',
    display: false
}


export default function(state = initialState, action){

    switch(action.type){
        case BEFORE_LIST_RESULT:
            return Object.assign({}, state, {loading: true, display: false});
        case RETRIEVE: 
            return Object.assign({}, state, {
                loading: false, 
                array: action.payload
            });
        case LIST_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                message: action.payload,
                msg_type: 'failed',
                display: true
            });    
        default:
          return state;
    }
  }