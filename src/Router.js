import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { WelcomeScreen } from './components/screens';

export default class Router extends Component {
    render() {
        return (
            <WelcomeScreen/>
        );
    }
}

