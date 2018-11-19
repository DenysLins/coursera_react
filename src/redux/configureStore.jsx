import { createStore } from 'redux';
import { Reducer, initialState } from './reducer.jsx';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;

};
