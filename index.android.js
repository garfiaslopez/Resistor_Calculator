/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

// MAIN COMPONENT
import Home from './components/Home';

const App = StackNavigator({
    Home: { screen: Home }
});

AppRegistry.registerComponent('ResistorCalc', () => App);
