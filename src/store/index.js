import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(
    reducers,
    {
        testAttr: 'Initial Header',
    }
);

export default store;