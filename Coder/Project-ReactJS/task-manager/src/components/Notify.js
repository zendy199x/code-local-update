import React, { Component } from 'react';
import {AlertContainer, Alert} from "react-bs-notifier";
import {connect} from 'react-redux';

import { actHideNotify} from './../actions/index';

class Notify extends Component {
    
    handleDismiss = () => {
        this.props.hideNotify();
    }
    
    render() {
        let {style, title, content, isShow} = this.props.item;
        if(isShow === false) return null;

        return (
            <AlertContainer position="top-right" >
                <Alert headline={title} type={style} timeout={3000} onDismiss={this.handleDismiss}>
                    {content}
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.notify
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideNotify: () => {
            dispatch(actHideNotify());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notify);

