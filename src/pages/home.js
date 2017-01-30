import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { push } from '../actions';
import { CardView, Icon, Touchable } from '../common';

const Style = {
    card: {
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
};

class Home extends React.Component {

    static navigationOptions = {
        title: 'Header',

        header: (navigation) => ({
            right: (
                <Touchable
                    onPress={() => navigation.navigate('Second', { foo: 'nothing yet' })}
                    style={{ marginRight: 15 }}
                >
                    <Icon name='arrow-forward' />
                </Touchable>
            )
        })
    };

    render() {
        return (
            <View style={Style.container}>
                <CardView style={Style.card}>
                    <Text style={Style.welcome}>
                        Welcome to React Native!!!!
                    </Text>
                    <Text style={Style.instructions}>
                        (Android){'\n'}
                        Double tap R on your keyboard to reload{'\n'}
                        Shake or press menu button for dev menu{'\n'}
                    </Text>
                    <Text style={Style.instructions}>
                        (iOS){'\n'}
                        Press Cmd + R on your keyboard to reload{'\n'}
                        Cmd + D for dev menu{'\n'}
                    </Text>
                </CardView>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: (route, args) => dispatch(push(route, args))
    };
}

export default connect(null, mapDispatchToProps)(Home);
