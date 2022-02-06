import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/action/beer';

export const useBeer = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.beer_info.loading);
    const error = useSelector((state) => state.beer_info.error);
    const info = useSelector((state) => state.beer_info.info);

    const previous = useSelector((state) => state.beer_list.previous);

    const randomBeer = () => {
        dispatch(actions.randomBeer());
    };

    const getPreviousBeer = () => {
        dispatch(actions.getPreviousBeer(previous));
    };

    const addPreviousBeer = (beer) => {
        dispatch(actions.addPreviousBeer(beer));
    };


    return {
        loading,
        error,
        info,
        randomBeer,
        previous,
        getPreviousBeer,
        addPreviousBeer
    }
};
