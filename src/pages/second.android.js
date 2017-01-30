import React from 'react';
import { View, Text } from 'react-native';
import { CardView } from '../common';

const Style = {
    card: {
        marginVertical: 10,
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF'
    },
    cardText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
};

export default class Second extends React.Component {

    static navigationOptions = {
        title: 'Second Page',
    };

    state = { text: '' };

    componentWillMount() {
        this.setState({ text: this.props.navigation.state.params.foo });
    }

    onChangeText(text) {
        this.setState({ text });
    }

    render() {
        return (
            <View style={Style.container}>
                <CardView style={Style.card}>
                    <Text style={Style.cardText}>
                        You typed {this.state.text}
                    </Text>
                </CardView>
            </View>
        );
    }
}
