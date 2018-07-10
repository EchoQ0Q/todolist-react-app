/*创建Store代码存放的位置*/

import { createStore } from 'redux';
import reducer from './reducer';

const Store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;