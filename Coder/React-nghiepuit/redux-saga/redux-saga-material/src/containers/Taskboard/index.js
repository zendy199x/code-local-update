import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import { connect } from 'react-redux';
import styles from './styles';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';

class TaskBoard extends Component {
    state = {
        open: false,
    };

    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchListTaskRequest } = taskActionCreators;
        fetchListTaskRequest();
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    openForm = () => {
        this.setState({
            open: true,
        });
    };

    renderBoard() {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map(status => {
                    const taskFiltered = listTask.filter(
                        task => task.status === status.value,
                    );
                    return (
                        <TaskList
                            key={status.value}
                            tasks={taskFiltered}
                            status={status}
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    }

    renderForm() {
        const { open } = this.state;
        let xhtml = null;
        xhtml = <TaskForm open={open} onClose={this.handleClose} />;
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard} id="1">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.openForm}
                >
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func,
    }),
    listTask: PropTypes.array,
};

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
    };
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TaskBoard),
);
