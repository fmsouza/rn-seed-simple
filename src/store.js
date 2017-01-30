import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { connect } from 'react-redux';
import AppReducer from './reducers';
import { AppNavigator } from './router';

export const AppWithNavigationState =
    connect(state => ({ nav: state.nav }))(({ dispatch, nav }) => (
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    ));

export const Store = createStore(AppReducer, {}, autoRehydrate(), applyMiddleware(ReduxThunk));
