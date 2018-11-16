import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomDefaultHeader, CustomTabBar } from '../reusable';
import { fetch, createNewProfile, getUserProfile } from '../../firebase/firebaseConfig';
import { MyProfileScreen, ExploreScreen } from './index';

let s = {
    myProfile: "MyProfile",
    explore: "Explore",
}

export default class HomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            currentScreen: s.myProfile,
        }
    }
    switchScreens(currentScreen){
        this.setState({currentScreen})
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
        let screen;

        if (this.state.currentScreen == s.myProfile){
            screen = <MyProfileScreen userType={userType}/>
        } else {
            screen = <ExploreScreen/>
        }

        return (
        <View style={container}>
            <View style={containerBlock}>
                <CustomDefaultHeader leftButtonPress={() => this.props.navigation.goBack()}/>
            </View>

            {screen}

            {/* <MyProfileScreen userType={userType}/> */}
            {/* <ExploreScreen/> */}

            <CustomTabBar
                leftButtonTitle = "Explore"
                rightButtonTitle = "My Profile"
                leftButtonPress = {() => this.switchScreens(s.explore)}
                rightButtonPress = {() => this.switchScreens(s.myProfile)}
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
