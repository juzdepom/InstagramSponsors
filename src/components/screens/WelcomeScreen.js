import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class WelcomeScreen extends Component {
    render() {
        // var { container }
        let { container,
            containerBlock,
            welcomeTextView,
            welcome,
            blurb } = styles
        return (
        <View style={container}>
            <View style={containerBlock}></View>
            <View style={containerBlock}>
                <View style={welcomeTextView}>
                    <Text style={welcome}>Welcome!</Text>
                    <Text style={blurb}>The purpose of this app is to facilitate the relationship between Instagram influencers and their sponsors.</Text>
                </View>
            </View>
            <View style={containerBlock}></View>

            <View style={containerBlock}></View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
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
