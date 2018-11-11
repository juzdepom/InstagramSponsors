import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class CustomAuthButton extends Component {
    render() {
        let { container, text } = styles
        return (
        <TouchableHighlight style={[container, { backgroundColor: 'blue' }]}>
            <Text style={text}>{this.props.title}</Text>
        </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
    },
    text: {
        color: 'white',
    }
});
