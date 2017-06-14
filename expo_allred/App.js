import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Address from './Address'
import { NativeRouter, Route, Link } from 'react-router-native'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to Expo Allred!
              </Text>
              <Text>ADDRESS COMPONENT APPEARS BELOW:</Text>
              <Address />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});