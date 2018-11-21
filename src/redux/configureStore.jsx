import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes.jsx';
import { Comments } from './comments.jsx';
import { Promotions } from './promotions.jsx';
import { Leaders } from './leaders.jsx';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;

};
