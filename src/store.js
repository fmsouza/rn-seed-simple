import React from 'react';
import { BackAndroid } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { connect } from 'react-redux';
import AppReducer from './reducers';
import { AppNavigator, INITIAL_ROUTE } from './router';

class BackButtonNavigator extends React.Component {

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            const { state, goBack } = this.props.navigation;
            const { index, routes } = state;
            if (routes[index].routeName !== INITIAL_ROUTE) {
                goBack();
                return true;
            }
            return false;
        });
    }

    render() {
        return <AppNavigator {...this.props} />;
    }
}

export const AppWithNavigationState =
    connect(state => ({ nav: state.nav }))(({ dispatch, nav }) => (
        <BackButtonNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    ));

export const Store = createStore(AppReducer, {}, autoRehydrate(), applyMiddleware(ReduxThunk));
