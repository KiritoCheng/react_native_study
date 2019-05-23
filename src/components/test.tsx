import React from 'react';
import { View } from "react-native";
import { getProductsProps } from '../actions/test';

interface TodoItemProps{
    item?:getProductsProps
}

export class TodoItem extends React.Component<TodoItemProps> {
    render() {
      const item = this.props.item;
      console.log(item)
      return (
        <View>
        </View>
      );
    }
  }