import { combineReducers } from 'redux';
import homeReducer from './home.reducer';
import clicksReducer from './clicks.reducer';
import generalInfoReducer from './generalinfo.reducer';
import listReducer from './list.reducer';


export default combineReducers({
    home: homeReducer,
    clicks: clicksReducer,
    general: generalInfoReducer,
    list: listReducer
});