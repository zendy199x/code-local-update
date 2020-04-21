import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch,
} from 'react-router-dom';

import routes from './../route-config';
import Title from './Title';
import Notify from './Notify';
import Menu from './Menu';

class App extends Component {
    
    render() {
        return (
            <Router>
                <div className="container">
                    <Title />
                    <Notify />
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Menu />
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            {this.showRoute(routes)}
                        </div>
                    </div>
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


