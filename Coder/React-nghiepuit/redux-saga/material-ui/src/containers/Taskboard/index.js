import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class Taskboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <div className={classes.shape}>ReactJS</div>
                <div className={classes.shape}>VueJS</div>
                <div className={classes.shape}>AngularJS</div>
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);