import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomDefaultHeader, CustomTabBar } from '../reusable';
import { fetch, createNewProfile, getUserProfile } from '../../firebase/firebaseConfig';
import { MyProfileScreen, ExploreScreen } from './index';

export default class HomeScreen extends Component {
    navigate(screenName){
        this.props.navigation.navigate(screenName)
    }

    render() {

        const { userType, userData } = this.props.navigation.state.params
        const { uid } = userData
        // fetch("userProfiles");
        // getUserProfile(uid)
        // createNewProfile("onTgOief53hXLf913FO2N1sU92h1", "devstickerscom@gmail.com", "devstickers")
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

            {/* <MyProfileScreen userType={userType}/> */}
            <ExploreScreen/>

            <CustomTabBar
                leftButtonTitle = "Explore"
                rightButtonTitle = "My Profile"
                leftButtonPress = {() => console.warn("go explore!")}
                rightButtonPress = {() => console.warn("my profile!")}
            />

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
