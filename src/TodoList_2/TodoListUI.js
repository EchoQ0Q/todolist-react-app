import React, {Component, Fragment} from 'react';
import { Input, List } from 'antd';
import 'antd/dist/antd.css';

const Search = Input.Search;

const TodoListUI = (props) => {
    return(
        <div className = "todo-list-wrapper">
            <Search
                value = {props.inputValue}
                placeholder = {props.placeholder}
                enterButton = {props.enterButton}
                size = "large"
                className = "todo-input"
                onChange = {
                    props.onChangeEvent
                }
                onSearch={
                    value => props.onSearchEvent(value)
                }
                //ref = {textInput}
            />
            <List
                header = {<div>列表项</div>}
                // footer={<div>Footer</div>}
                bordered
                className = "todo-list"
                dataSource = {props.data}
                renderItem = { (item, key) => (
                    
                    
                    <List.Item 
                        onClick = {
                            (index) => props.onListItemClick(key)
                        }
                    >
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
} 

// class TodoListUI extends Component{

//     render(){
//         return (

//             <div className = "todo-list-wrapper">
//                 <Search
//                     value = {this.props.inputValue}
//                     placeholder = {this.props.placeholder}
//                     enterButton = {this.props.enterButton}
//                     size = "large"
//                     className = "todo-input"
//                     onChange = {
//                         this.props.onChangeEvent
//                     }
//                     onSearch={
//                         value => this.props.onSearchEvent(value)
//                     }
//                     //ref = {this.textInput}
//                 />
//                 <List
//                     header = {<div>列表项</div>}
//                     // footer={<div>Footer</div>}
//                     bordered
//                     className = "todo-list"
//                     dataSource = {this.props.data}
//                     renderItem = { (item, key) => (
                       
                        
//                         <List.Item 
//                             onClick = {
//                                 (index) => this.props.onListItemClick(key)
//                             }
//                         >
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>

//         )
//     }

// }

export default TodoListUI;

