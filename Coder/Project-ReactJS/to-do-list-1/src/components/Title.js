import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <div className="page-header">
                <h1>To Do List <small>by ReactJS</small></h1>
            </div>
        );
    }
}

export default Title;
