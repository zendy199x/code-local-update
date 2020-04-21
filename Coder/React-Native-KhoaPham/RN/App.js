import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import List from './components/List';
import Form from './components/Form';
import MyFlatlist from './components/MyFlatlist';


export default class App extends Component {
  render() {
    return (
        <MyFlatlist/>
    );
  }
}
// Auto close tag (Jun Han)
// Auto Rename tag (Jun Han)
// ES7 React/Redux (dsznajder)
// npm Intellisense (Christian Kohler)
// Path Intellisense(Christian)
// vscode-icons (vscode icons team)
// auto import (steoat)
