import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class CustomTabBar extends Component {
    render() {
        let {
            leftButtonTitle,
            rightButtonTitle,
            leftButtonPress,
            rightButtonPress
        } = this.props
        let { container, leftButton } = styles
        return (
        <View
            style={[container, { backgroundColor: 'lightgray' }]}>

            <TouchableHighlight
                style={leftButton}
                onPress={leftButtonPress}
            >
                <Text>{leftButtonTitle}</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={leftButton}
                onPress={rightButtonPress}
            >
                <Text>{rightButtonTitle}</Text>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    leftButton: {
        marginTop: 30,
        marginLeft: 15,
        height: 30,
        width: 60,
    },
    rightButtton: {
        marginTop: 30,
        marginRight: 15,
        height: 30,
        width: 70,
    }
});



