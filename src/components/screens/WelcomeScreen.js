import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomAuthButton } from '../reusable';
// import firebaseApp from '../../firebase/firebaseSetup';
import * as firebase from 'firebase';
import { firebaseConfig }  from '../../firebase/firebaseConfig';

export default class WelcomeScreen extends Component {
    navigate(screenName){
        this.props.navigation.navigate(screenName)
    }
    logInAsGuest(){
        console.warn("logging in as guest", firebaseConfig)
        // this.props.navigation.navigate("HomeScreen")

        firebase.auth().signInAnonymously()
            .then(() => {
                console.warn("logged in successfully as guest");
                this.props.navigation.navigate("HomeScreen")

                //set authenticated state as true.
            })
            .catch((error) => {
                console.warn(`login failed. error: ${error}` );
            })


    }
    render() {

        firebase.initializeApp(firebaseConfig);
        let { container,
            containerBlock,
            welcomeTextView,
            welcome,
            blurb } = styles
        return (

        <View style={container}>
            <View style={containerBlock}></View>
            <View style={containerBlock}>
                <View style={welcomeTextView}>
                    <Text style={welcome}>Welcome!</Text>
                    <Text style={blurb}>The purpose of this app is to facilitate the relationship between Instagram influencers and their sponsors.</Text>
                </View>
            </View>
            <View style={containerBlock}>
                <View style={welcomeTextView}>
                    <CustomAuthButton
                        title="Login"
                        onPress={() => this.navigate("LoginScreen")}
                        />
                    <CustomAuthButton
                        title="Sign Up"
                        onPress={() => this.navigate("SignUpScreen")}
                        />
                    <CustomAuthButton
                        title="Enter As Guest"
                        onPress={() => this.logInAsGuest()}
                        />


                </View>
            </View>

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
