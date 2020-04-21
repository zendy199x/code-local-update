import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from './../Taskboard/index';
import theme from './../../commons/Theme';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Taskboard />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
