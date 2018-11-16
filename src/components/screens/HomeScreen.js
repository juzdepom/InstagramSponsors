import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomDefaultHeader } from '../reusable';
import { fetchFirebaseDataUrl, fetch } from '../../firebase/firebaseConfig';

export default class HomeScreen extends Component {
    componentWillMount(){
    }

    render() {

        const { userType, userData } = this.props.navigation.state.params
        const { uid } = userData
        // var userProfiles = fetchFirebaseDataUrl("userProfile")
        fetch("userProfiles");
        // console.warn('userProfiles: ', userProfiles)
        // console.warn(userData.uid)
        // this.checkForUserProfile(this.props.navigatio n.state.params);
        let { container,
            containerBlock,
            welcomeTextView,
            welcome,
            blurb } = styles
        return (
        <View style={container}>
            <View style={containerBlock}>
                <CustomDefaultHeader leftButtonPress={() => this.props.navigation.goBack()}/>
            </View>
            <View style={containerBlock}>
                <View style={welcomeTextView}>
                    <Text style={welcome}>Welcome!</Text>
                    <Text style={blurb}>You are logged in as {userType}</Text>
                    {/* <Text style={blurb}>{userData}</Text> */}
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
