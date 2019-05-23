import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCicle } from "../components/units/Button"
import { NavigationScreenProps } from 'react-navigation';

interface HomeScreenProps extends NavigationScreenProps { }

export default class HomeScreen extends React.Component<HomeScreenProps> {
    handleNavigate() {
        this.props.navigation.navigate('Details');
    }

    render() {
        return (
            <>
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
