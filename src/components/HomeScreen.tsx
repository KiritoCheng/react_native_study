import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCicle } from "./units/Button"
import { NavigationScreenProps } from 'react-navigation';
import { getProductsTypes } from '../schema/type';

export interface productsDataProps {
    list: getProductsTypes[]
}
export interface productsEventProps {
    componentDidMount: () => void;
}
interface productsProps extends productsDataProps, productsEventProps, NavigationScreenProps { }

export class HomeScreen extends React.Component<productsProps> {
    handleNavigate() {
        this.props.navigation.navigate('Details');
    }

    componentDidMount() {
        this.props.componentDidMount();
    }

    render() {
        const { list = [] } = this.props;
        return (
            <>
                {
                    list.map(k => {
                        return (
                            <>
                                <Text> {k.Name}</Text>
                            </>
                        )
                    })
                }
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>点击右下角按钮添加新的账单</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 48, right: 36 }}>
                    <ButtonCicle onTap={() => this.handleNavigate()} />
                </View>
            </>
        );
    }
}
