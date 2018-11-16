import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ExploreScreen extends Component {
    render(){

        let {
            containerBlock,
            welcomeTextView,
            welcome,
            blurb } = styles
        return (
            <View style={containerBlock}>
                <View style={welcomeTextView}>
                    <Text style={welcome}>Explore Page!</Text>
                    <Text style={blurb}>You are exploring</Text>
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
