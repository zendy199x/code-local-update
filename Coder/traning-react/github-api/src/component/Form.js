import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
    state = { userName: "" };

    handleSubmit = async event => {
        event.preventDefault();
        const resp = await axios.get(
            `https://api.github.com/users/${this.state.userName}`
        );
        this.props.onSubmit(resp.data);
        this.setState({ userName: "" });
    };

    handleChange = event => {
        this.setState({ userName: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    placeholder="GitHub User"
                    required
                />
                <button>Add Cart</button>
            </form>
        );
    }
}

export default Form;
