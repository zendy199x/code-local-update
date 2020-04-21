import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import routes from './../route-config';
import Title from './Title';
import Breadcrumb from './Breadcrumb';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Title />
                    <Breadcrumb />
                    {this.showRoute(routes)}
                </div >
            </Router>
        );
    }

    showRoute(routes){
        let xhtml = null;
        
        if(routes.length > 0 ){
            xhtml = routes.map((route, index)=> {
                return (
                    <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
                );
            });
        }
    
        return <Switch>{xhtml}</Switch>;
    }
}

export default App;


