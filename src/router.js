import React from 'react';
import { Home, Second } from './pages';

export default (route, navigator) => {
    switch (route.id) {

        default:
        case 'home':
            return <Home navigator={navigator} args={route.args} />;

        case 'second':
            return <Second navigator={navigator} args={route.args} />;
    }
};
