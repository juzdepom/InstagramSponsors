import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MyProfileScreen extends Component {
    render(){
        let {
            userType,
            userProfileData,
            // userData,
        } = this.props
        // console.warn(this.props)
        // console.warn(this.props.userProfileData)
        // let {
        //     dateCreated,
        //     email,
        //     godMode,
        //     instagram,
        //     name,
        //     notes,
        //     uid,
        // } = this.props.userProfileData
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
                    {/* <Text style={blurb}>Date Created: {dateCreated}</Text>
                    <Text style={blurb}>Email: {email}</Text>
                    <Text style={blurb}>Name: {name}</Text>
                    <Text style={blurb}>Instagram: {instagram}</Text>
                    <Text style={blurb}>Notes: {notes}</Text>
                    <Text style={blurb}>UID: {uid}</Text>
                    <Text style={blurb}>God Mode: {godMode}</Text> */}
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
