import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes.jsx';
import { Comments } from './comments.jsx';
import { Promotions } from './promotions.jsx';
import { Leaders } from './leaders.jsx';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;

};
