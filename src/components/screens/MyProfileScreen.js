import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MyProfileScreen extends Component {
    render(){
        let { userType } = this.props
        let {
            containerBlock,
            welcomeTextView,
            welcome,
            blurb } = styles
        return (
            <View style={containerBlock}>
                <View style={welcomeTextView}>
                    <Text style={welcome}>Welcome!</Text>
                    <Text style={blurb}>You are logged in as {userType}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerBlock: {
        flex: 1,
    },
    welcomeTextView: {
        marginHorizontal: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    blurb: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
