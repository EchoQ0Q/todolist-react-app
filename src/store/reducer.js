import {
    CHANGE_INPUT_VALUE,
    SUBMIT_INPUT_VALUE,
    DELETE_LIST_ITEM
} from './actionTypes';

//默认值
const defaultState = {

    inputValue: 'aaa',
    list: [1,2]

};
// reducer 可以接受state，但是绝对不会修改state，修改由管理员store完成
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
// reducer不能有异步和时间相关的非纯函数操作
export default (state = defaultState, action) => {
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
    }
    if (action.type === SUBMIT_INPUT_VALUE) {
        newState.list = [...newState.list, newState.inputValue];
    }
    if (action.type === DELETE_LIST_ITEM) {
        newState.list.splice(action.value, 1);
    }
    return newState;

}