import React from 'react';
import { View, Text } from 'react-native';
import { CardView } from '../common';

const Style = {
    card: {
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
};

export default class Second extends React.Component {

    static navigationOptions = {
        title: 'Second Page',
    };

    render() {
        return (
            <View style={Style.container}>
                <CardView style={Style.card}>
                    <Text style={Style.welcome}>
                        This page is presented only to iOS devices.
                    </Text>
                </CardView>
            </View>
        );
    }
}
