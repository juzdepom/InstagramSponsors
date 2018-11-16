import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class CustomAuthButton extends Component {
    render() {
        let { placeholder, onChangeText, value, onPress } = this.props
        let { inputField } = styles
        return (
        <TextInput
            onPress={onPress}
            style={inputField}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
        );
    }
}

const styles = StyleSheet.create({
    inputField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        borderRadius: 10
    },
});
