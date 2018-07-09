import React , { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(){
        return false;
    }

    render(){
        console.log('又render啦！')
        return (
            <div onClick = {this.handleClick}> 
                {this.props.test}-{this.props.content} 
            </div>
        );

    }

    handleClick(){
        const {delListItem, index} = this.props;
        delListItem(index);
    }



}

TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;