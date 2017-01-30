import React from 'react';
import { StatusBar, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AppWithNavigationState, Store } from './store';
import Theme from './theme';

export default class App extends React.Component {

    componentDidMount() {
        persistStore(this.store, { storage: AsyncStorage });
    }

    store = Store;

    render() {
        return (
            <Provider store={this.store}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        translucent={false}
                        backgroundColor={Theme.statusBarColor}
                        barStyle={Theme.statusBarStyle}
                    />
                    <AppWithNavigationState />
                </View>
            </Provider>
        );
    }
}
