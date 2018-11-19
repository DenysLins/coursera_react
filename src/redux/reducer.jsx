import { DISHES } from '../shared/dishes.jsx';
import { COMMENTS } from '../shared/comments.jsx';
import { PROMOTIONS } from '../shared/promotions.jsx';
import { LEADERS } from '../shared/leaders.jsx';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
