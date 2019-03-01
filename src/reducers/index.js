import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';

// Add all reducers here
export default combineReducers({
    testAttr: sampleReducer,
});