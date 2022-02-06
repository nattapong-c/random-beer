import { combineReducers } from 'redux';
import { beerInfoReducer, beerPreviousReducer } from './beer'


const appReducer = combineReducers({
    beer_info: beerInfoReducer,
    beer_list: beerPreviousReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;