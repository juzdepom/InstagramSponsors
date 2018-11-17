import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MyProfileScreen extends Component {
    constructor(){
        super()

    }
    render(){
        let { userType, userProfileData } = this.props

        let { dateCreated, email, name, instagram, notes, uid, godMode } = userProfileData

        if(userProfileData != null ){
            console.warn('userProfileData myprofilescreen.js: ', userProfileData)

        }

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

                    <View style={{textAlign: 'left'}}>
                        <Text style={blurb}>{`\nDate Created: `}{dateCreated}</Text>
                        <Text style={blurb}>Emaiiil: {email}</Text>
                        <Text style={blurb}>Name: {name}</Text>
                        <Text style={blurb}>Instagram: {instagram}</Text>
                        <Text style={blurb}>Notes: {notes}</Text>
                        <Text style={blurb}>UID: {uid}</Text>
                        {/* <Text style={blurb}>God Mode: {godMode.toString()}</Text> */}
                    </View>

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
        color: '#333333',
        marginBottom: 5,
    },
});
