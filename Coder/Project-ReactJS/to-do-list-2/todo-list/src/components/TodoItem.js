import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import success from '../img/success.svg';
import successGreen from '../img/success-green.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick} = this.props;
        let url = success;
        if (item.isComplete) {
            url = successGreen;
        }

        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })} onClick={onClick}>
                <img src={url} width={40} alt=""/>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItem;
