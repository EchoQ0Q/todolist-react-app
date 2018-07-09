import React , {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.textInput = React.createRef();
        this.changeInputVal = this.changeInputVal.bind(this);
        this.submitlistVal = this.submitlistVal.bind(this);
        this.delListItem = this.delListItem.bind(this);
    }

    render(){
        return (
            <Fragment>
                {/*这里是注释*/}
                <div>
                    <label htmlFor="insertArea">请输入</label>
                    < input 
                        placeholder ="请输入..." 
                        id = "insertArea"
                        value = {
                            this.state.inputValue
                        }
                        onChange = {
                            this.changeInputVal
                        }
                        ref = {this.textInput}
                    />
                    <button onClick = {this.submitlistVal}>Submit</button>
                </div>
                <div>
                    {
                        this.getTodoItem()
                    }
                </div>
            </Fragment>
        );

    }
    
    componentDidMount(){
        axios.get('/api/todolist')
            .then((res) => { 
                console.log(res.data);
                this.setState(() => ({
                    list: [...res.data]
                }));
            })
            .catch(() => { alert('error') });
    }

    getTodoItem(){
        return this.state.list.map((item, key) => {

            return <TodoItem 
                key = {
                    key
                }
                index = {
                    key
                }
                content = {
                    item || null
                }
                delListItem = {
                    this.delListItem
                }
            />

        });

    }

    changeInputVal(e){
        this.setState(() => ({
            inputValue: this.textInput.current.value
        }));
    }

    submitlistVal(){
        
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    delListItem(index){
        
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list};
        });

    }

}

export default TodoList;
