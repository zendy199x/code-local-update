import React, { Component } from "react";
import CardList from "./component/CardList";
import Form from "./component/Form";
import "./App.css";

class App extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     profiles: testData
    //   }
    // }

    state = {
        profiles: []
    };

    addNewProfile = profileData => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewProfile} />
                <div className="header">{this.props.title}</div>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;
