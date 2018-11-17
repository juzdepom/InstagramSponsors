import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomDefaultHeader, CustomTabBar, CustomAuthButton } from '../reusable';
import { fetch, createNewProfile, firebaseApp } from '../../firebase/firebaseConfig';
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
            userProfileData: null,
            userType: null,
            userData: null,
            uid: null,
            userProfileData: {
                //these are the defaults
                dateCreated: "update pls",
                email: "x",
                name: "xx",
                instagram: "asdf",
                notes: "x",
                uid: "xa",
                godMode: false,
            },
        }
    }
    componentWillMount(){
        const { userType, userData } = this.props.navigation.state.params
        this.setState({userType,userData})

        const { uid } = userData
        this.getUserProfile(uid)
    }
    switchScreens(currentScreen){
        this.setState({currentScreen})
    }
    getUserProfile(uid){
        var res = firebaseApp.database().ref().child("userProfiles").child(uid)
        res.on('value', (data) => {
            //idea. set the defaults here!!
            console.warn('here is the fetched data: ', data)
            var dateCreated = data.dateCreated
            //BELOW IS NOT WORKING
            // this.setState({userProfileData: data})

            console.warn('user profile data homescreen.js: ', this.state.userProfileData)
            // return data;
        });
    }
    render() {
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
