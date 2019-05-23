import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight
} from 'react-native';

const PrimaryStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
  },
  button: {
    width: 56,
    height: 56,
    padding: 0,
    minWidth: 0,
    minHeight: 36,
    elevation: 6,
    fontWeight: '500',
    lineHeight: 1.75,
    borderRadius: 56 / 2,
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  text: {
    color: '#fff',
    fontSize: 26,
  },
});


interface ButtonCicleProps{
  onTap?: ()=>void
};
export const ButtonCicle = (props: ButtonCicleProps) => {
  return (
    <TouchableHighlight style={{ borderRadius: 56 / 2 }} onPress={() => { props.onTap && props.onTap(); }}>
      <View style={[PrimaryStyles.container, PrimaryStyles.button]}>
        <Text style={PrimaryStyles.text}>+</Text>
      </View>
    </TouchableHighlight>
  )
}