import React from 'react';
import { Platform } from 'react-native';
import { Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'ios',
  android: `android`
});


export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailsScreen</Text>
        <Text>{instructions}</Text>
      </View>
    );
  }
}