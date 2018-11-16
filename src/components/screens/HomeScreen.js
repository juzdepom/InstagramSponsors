import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomDefaultHeader, CustomTabBar, CustomAuthButton } from '../reusable';
import { fetch, createNewProfile, getUserProfile } from '../../firebase/firebaseConfig';
import { MyProfileScreen, ExploreScreen } from './index';

let s = {
    myProfile: "MyProfile",
    explore: "Explore",
}

export default class HomeScreen extends Component {
    constructor(){
        super();
        // const { userType, userData } = this.props.navigation.state.params
        // const { uid } = userData
        // let userProfileData = getUserProfile(uid)

        this.state = {
            currentScreen: s.myProfile,
            userProfileData: null,
            userType: null,
            userData: null,
            uid: null,
            userProfileData: null,
        }
    }
    componentDidMount(){
        const { userType, userData } = this.props.navigation.state.params
        const { uid } = userData
        // let userProfileData = getUserProfile(uid)

        this.setState({
            userType,
            userData,
            uid,
            userProfileData: getUserProfile(uid)
        })

        // console.warn('user profile data: ', this.state.userProfileData)
    }
    switchScreens(currentScreen){
        this.setState({currentScreen})
    }

    render() {
        // console.warn('state: ', this.state)
        console.warn('userProfileData from HomeScreen.js: ', this.state.userProfileData)

        //The userData here comes from authentication
        // const { userType, userData } = this.props.navigation.state.params
        // const { uid } = userData
        // this.setUserProfileData(uid)
        // fetch("userProfiles");


        // createNewProfile("onTgOief53hXLf913FO2N1sU92h1", "devstickerscom@gmail.com", "devstickers")
        let { container,
            containerBlock,
            welcomeTextView,
            welcome,
            blurb } = styles
        let screen;

        if (this.state.currentScreen == s.myProfile){
            screen = <MyProfileScreen userType={this.state.userType} userProfileData={this.state.userProfileData}/>
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
            <CustomAuthButton
                title="get user profile data"
                onPress={() =>
                    this.setState({
                    userProfileData: getUserProfile(this.state.uid)
                })
            }
            />

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
