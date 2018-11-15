import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { CustomAuthButton, CustomDefaultHeader, CustomDefaultTextInput } from '../reusable';
import { firebaseApp }  from '../../firebase/firebaseConfig';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            dummyPassword: "Password",
        };
    }
    login(email, password){
        // if(email == null || password == null){
        if(email == null){
            console.warn('one of the input fields are empty!')
        } else {
            firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((results) => {
                let { email } = results.user
                console.warn("user: ", email)
                this.props.navigation.navigate("HomeScreen", { userType: email, userData: results.user })
            })
            .catch(function(error) {
                // Handle Errors here.
                console.warn('login error! ', error.message)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

        }
    }
    render() {
        let { container,
            containerBlock,
            loginView,
            login,
            } = styles
        return (
        <View style={container}>
            <View style={containerBlock}>
                <CustomDefaultHeader leftButtonPress={() => this.props.navigation.goBack()}/>
            </View>
            <View style={containerBlock}>
                <View style={loginView}>

                    <Text style={login}>Login</Text>
                    <Text><B>Emails</B>{"\n"}hi@dvlpr.io {"\n"}mikhail@micainteractive.com{"\n"}tim@fueledonbacon.com{"\n"}info@devhero.shop{"\n"}devstickerscom@gmail.com{"\n"}adrienne.tacke@gmail.com{"\n"}sean@nakmuaynation.com{"\n"}ronan@kicksta.co {"\n"}</Text>
                    <CustomDefaultTextInput
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                    <Text>For testing purposes, there's is temporarily no need to enter password</Text>
                    <CustomDefaultTextInput
                        placeholder="Password"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <CustomAuthButton
                        title="Login"
                        onPress={() => this.login(this.state.email, this.state.dummyPassword)}
                    />
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
    loginView: {
        marginHorizontal: 50,
    },
    login: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
