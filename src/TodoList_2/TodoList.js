import React, { Component, Fragment } from 'react';
import { Input, List } from 'antd';
import store from '../store';
import 'antd/dist/antd.css';
import {
    getInputChangeAction,
    getInputSubmitAction,
    getInputDelAction
} from '../store/actionCreators';

const Search = Input.Search;

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
            <div className = "todo-list-wrapper">
                <Search
                    value = {this.state.inputValue}
                    placeholder = "input search text"
                    enterButton = "Submit"
                    size = "large"
                    className = "todo-input"
                    onChange = {this.inputValueChange}
                    onSearch={
                        value => this.submitInputValue(value)
                    }
                    //ref = {this.textInput}
                />
                <List
                    header = {<div>列表项</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    className = "todo-list"
                    dataSource = {this.state.list}
                    renderItem = { (item, key) => (
                        <List.Item 
                            onClick = { this.deleteListItem.bind(this,key) }
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
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