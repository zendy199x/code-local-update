import React, { Component } from 'react';
import {actToggleForm, actUnSelectItem} from './../actions/index';
import {connect} from 'react-redux';

class ToggleForm extends Component {
    toggleForm = () => {
        this.props.handleToggle(); 
    }

    render() {
        const {isShowForm}  = this.props;
        let btnName         = (isShowForm === true) ? "Close Form" : "Open Form";
        let btnClass        = (isShowForm === true) ? "btn-success" : "btn-info";

        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button onClick={this.toggleForm} type="button" className={`btn btn-block ${btnClass}`}>{btnName}</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: () => {
            dispatch(actToggleForm()) ;
            dispatch(actUnSelectItem()) ;
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);
