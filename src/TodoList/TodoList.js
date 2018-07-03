import React , {Component, Fragment} from 'react';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };

        this.changeInputVal = this.changeInputVal.bind(this);
        this.submitlistVal = this.submitlistVal.bind(this);
        this.delListItem = this.delListItem.bind(this);
    }

    render(){
        return (
            <Fragment>
                {/*这里是注释*/}
                <div>
                    < input placeholder ="请输入..." value = {
                        this.state.inputValue
                    }
                    onChange = {
                        this.changeInputVal
                    }
                    />
                    <button onClick = {this.submitlistVal}>Submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,key)=>{
                            return <li 
                            key = {key} 
                            //onClick = {this.delListItem.bind(this,key)} 
                            onClick = {
                                () => this.delListItem(key)
                            }
                            > {item} </li>;
                        })
                    }
                </ul>
            </Fragment>
        );

    }

    changeInputVal(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    submitlistVal(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    delListItem(index){
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

}

export default TodoList;
