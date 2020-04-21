import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5iShiqHINlFhVRn4J16VJE5ue8u5UtoQ",
    authDomain: "task-manager-reactjs.firebaseapp.com",
    databaseURL: "https://task-manager-reactjs.firebaseio.com",
    projectId: "task-manager-reactjs",
    storageBucket: "task-manager-reactjs.appspot.com",
    messagingSenderId: "233504682088"
};

export const firebaseApp        = firebase.initializeApp(config);
export const tasksRef           = firebase.database().ref("tasks");
export const tasksCompletedRef  = firebase.database().ref("tasksCompleted");
export const usersRef           = firebase.database().ref("users");