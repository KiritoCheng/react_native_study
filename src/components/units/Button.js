import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';

const PrimaryStyles = StyleSheet.create({
    background:{
        backgroundColor:'#2196f3',
        color:'#fff'
    },
    button:{
        width: 56,
        height: 56,
        padding: 0,
        fontSize: 12,
        minWidth: 0,
        boxSizing: 'border-box',
        minHeight: 36,
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        fontWeight: 500,
        lineHeight: '1.75',
        borderRadius: '50%',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',   
    }
});

export class ButtonCicle extends React.Component{
    render(){
        return(
            <View style={[PrimaryStyles.background,PrimaryStyles.button]}>
                +
            </View>
        )
    }
}