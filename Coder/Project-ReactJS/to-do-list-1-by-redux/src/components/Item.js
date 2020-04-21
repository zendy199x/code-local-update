import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actOpenForm, actDeteleItem, actSelectedItem} from './../actions/index';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    handleEdit(item){
       // this.props.onClickEdit(item);
       this.props.editItem(item);
    }

    handleDelete(id){
        this.props.deleteItem(id); // dispatch(actDeteleItem(id)) ;
    }

    render() {
        const {item} = this.props;
        const {index} = this.props;

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                    <button onClick={()=>this.handleEdit(item)}  type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>   
            </tr>
        );
    }

    showElementLevel(level){
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elmLevel = <span className="label label-info">Medium</span>;
        }else if(level === 2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editItem: (item) => {
            dispatch(actSelectedItem(item)) ;
            dispatch(actOpenForm()) ;
        },
        deleteItem: (id) => {
            dispatch(actDeteleItem(id)) ;
        } 
    }
}

export default connect(null, mapDispatchToProps)(Item);
