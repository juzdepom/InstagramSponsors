import React, {Component} from 'react';
import { WelcomeScreen, LoginScreen, SignUpScreen, HomeScreen } from './components/screens';
import { createStackNavigator } from 'react-navigation';

//for direct navigation
const MainStack = createStackNavigator(
    {
        WelcomeScreen: {
            screen: WelcomeScreen
        },
        LoginScreen: {
            screen: LoginScreen
        },
        SignUpScreen: {
            screen: SignUpScreen
        },
        HomeScreen: {
            screen: HomeScreen
        },
    },
    {
        //this removes the default header
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
        }
    }

)

export default class Router extends Component {
    render() {
        return (
            <MainStack/>
        );
    }
}

