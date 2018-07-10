import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI';
import store from '../store';

import {
    getInputChangeAction,
    getInputSubmitAction,
    getInputDelAction
} from '../store/actionCreators';


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.inputValueChange = this.inputValueChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.submitInputValue = this.submitInputValue.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        //this.textInput = React.createRef();
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return(
            <TodoListUI
                inputValue = {this.state.inputValue}
                placeholder = "input search text"
                enterButton = "Submit"
                onChangeEvent = { this.inputValueChange }
                onSearchEvent = { this.submitInputValue }
                onListItemClick = { this.deleteListItem }
                data = { this.state.list }
            />

        )

    }

    inputValueChange(e){
        const action = getInputChangeAction(e.target.value);

        //将action传给store
        store.dispatch(action);
    }

    handleStoreChange(){
        const { inputValue, list } = store.getState();
        this.setState(() => ({
            inputValue: inputValue,
            list: list
        }));
    }

    submitInputValue(value){

        const action = getInputSubmitAction();

        store.dispatch(action);
    }

    deleteListItem(key){
        const action = getInputDelAction(key);

        store.dispatch(action);

    }

}

export default TodoList;