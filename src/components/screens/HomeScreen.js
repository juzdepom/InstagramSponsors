import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomDefaultHeader } from '../reusable';
import { fetch, createNewProfile, getUserProfile } from '../../firebase/firebaseConfig';

export default class HomeScreen extends Component {
    componentWillMount(){
    }

    render() {

        const { userType, userData } = this.props.navigation.state.params
        const { uid } = userData
        // var userProfiles = fetchFirebaseDataUrl("userProfile")
        fetch("userProfiles");
        getUserProfile(uid)
        // createNewProfile("onTgOief53hXLf913FO2N1sU92h1", "devstickerscom@gmail.com", "devstickers")
        // createNewProfile("VijdqsaXhgabkYqv8OQ7uaRCsAg2", "hi@dvlpr.io", "DVLPR")
        // createNewProfile("PvTZbsCCdQMKKQPUpEHVtEM0PAy1", "julia.gao.miller@gmail.com", "CodebreakerJulia")
        // createNewProfile("7L7b3MrYSxcfCpXK6oVNUPWYIYB2", "adrienne.tacke@gmail.com", "Adrienne")
        // createNewProfile("OtzyrHHdsnMldwIHJLhoAvAgibO2", "sean@nakmuaynation.com", "Sean")
        // createNewProfile("WrIYdUGvnQMsatBYOo5UFTA0sAG2", "mikhail@micainteractive.com", "Mikhail")

        // createNewProfile("elCxMA9UeefDxDStZtPkCkQ9oXZ2", "tim@fueledonbacon.com", "Tim")

        // createNewProfile("hmujV1fXLUYrMKKt8pArz9HFgjF3", "info@devhero.shop", "DevHero")

        // createNewProfile("zJqVuPJKs9ZMgjcEmJaDCUcNbHU2", "marvizu@kicksta.co", "Miguel")

        // createNewProfile("7L7b3MrYSxcfCpXK6oVNUPWYIYB2", "", "")





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
