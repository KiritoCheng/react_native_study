import React from 'react';
import {
  StyleSheet, View, Text,
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
    elevation: 5,
    fontWeight: '500',
    lineHeight: 1.75,
    borderRadius: 56 / 2,
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});


type ButtonCicleProps = {
  onTap?:"FunctionDeclaration"
};
export const ButtonCicle = (props:ButtonCicleProps)=>{
  return(
      <View style={[PrimaryStyles.container, PrimaryStyles.button]}
        onClick={() => { props.onTap && props.onTap(); }}>
        <Text style={PrimaryStyles.text}>+</Text>
      </View>
  )
}



// export class ButtonCicle extends React.Component<ButtonCicleProps>{
//   render(){
//     return(
//       <View
//         style={[PrimaryStyles.container, PrimaryStyles.button]}
//         onClick={() => { this.props.onTap(); }}>
//         <Text style={PrimaryStyles.text}>+</Text>
//       </View>
//     )
//   }
// }