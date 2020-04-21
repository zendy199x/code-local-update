import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import Sort from './components/Sort';
import ToggleForm from './components/ToggleForm';

class App extends Component {
    render() {
        return (
            <div>
                <Title />
                <div className="row">
                    <Search />
                    <Sort  />
                    <ToggleForm />
                </div>
                <Form />
                <List />
            </div>
        );
    }
}

export default App;
