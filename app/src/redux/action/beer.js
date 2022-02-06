import * as TYPES from '../type/beer';
import * as API from '../api/beer';

export const randomBeer = () => async (dispatch) => {
    dispatch({ type: TYPES.RANDOM_BEER_REQ });
    try {
        const response = await API.randomBeer();
        if (response.status === 200) {
            dispatch({ type: TYPES.RANDOM_BEER_SUCCESS, payload: response });
        } else {
            dispatch({ type: TYPES.RANDOM_BEER_FAIL, payload: response.response.data.error });
        }
    } catch (error) {
        dispatch({ type: TYPES.RANDOM_BEER_FAIL, payload: error });
    }
};

export const addPreviousBeer = (beer) => (dispatch) => {
    dispatch({ type: TYPES.ADD_BEER, payload: beer });
};

export const getPreviousBeer = (beerList) => (dispatch) => {
    let prev = beerList[beerList.length - 1]
    dispatch({ type: TYPES.RANDOM_BEER_SUCCESS, payload: { data: prev } });
    dispatch({ type: TYPES.POP_BEER });
};