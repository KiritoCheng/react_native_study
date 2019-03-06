/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {ButtonCicle} from './components/units/Button'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


class HomeScreen extends React.Component{
  render() {
    return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>Home Screen</Text>
        <ButtonCicle/>
      </View>
    )
  }
}

class DetailsScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>DetailsScreen</Text>
      </View>
    )
  }
}

const MainNavation = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions:()=>({
        title:"我的列表",
        headerBackTitle: null
      }),
    },
    Details:DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
)
const AppContainer = createAppContainer(MainNavation);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
