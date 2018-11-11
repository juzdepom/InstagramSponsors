import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class CustomDefaultHeader extends Component {
    render() {
        let { container, leftButton } = styles
        return (
        <View
            style={[container, { backgroundColor: 'lightgray' }]}>
            <TouchableHighlight
                style={leftButton}
                onPress={this.props.leftButtonPress}
            >
                <Text>Back</Text>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
    },
    leftButton: {
        marginTop: 50,
        marginLeft: 15,
        height: 30,
        width: 60,
    }
});



