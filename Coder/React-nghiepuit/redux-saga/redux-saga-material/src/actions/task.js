import * as taskApis from './../apis/task';
import * as taskContants from './../constants/task';

export const fetchListTask = () => {
    return {
        type: taskContants.FETCH_TASK
    }
}

export const fetchListTaskSuccess = data => {
    return {
        type: taskContants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListTaskFailed = error => {
    return {
        type: taskContants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
}

// B1: fetchListTaskRequest()
// B2: reset: state tasks => []
// B3: fetchListTaskSuccess(data response)

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList().then(resp => {
            const { data } = resp;
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        })
    }
}