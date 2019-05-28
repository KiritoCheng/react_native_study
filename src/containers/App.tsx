/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../containers/HomeScreen';
// import DetailsScreen from '../containers/DetailsScreen';


const MainNavation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: "我的账单",
        headerBackTitle: null,
      }),
    },
    // Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(MainNavation);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

