import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../routes-config';

function App() {
    return (
        <Router>
            <Fragment>

                {showRoutes(routes)}

            </Fragment>

        </Router>

    );
}

const showRoutes = routes => {
    let result = null;

    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return <Route path={route.path} exact={route.exact} component={route.main} key={index} />
        });
    }

    return <Switch>{result}</Switch>
}

export default App;