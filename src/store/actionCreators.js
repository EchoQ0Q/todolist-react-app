import {
    CHANGE_INPUT_VALUE,
    SUBMIT_INPUT_VALUE,
    DELETE_LIST_ITEM
} from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getInputSubmitAction = () => ({
    type: SUBMIT_INPUT_VALUE
});

export const getInputDelAction = (value) => ({
    type: DELETE_LIST_ITEM,
    value
});