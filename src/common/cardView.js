import React from 'react';
import { View } from 'react-native';

const Style = {
    container: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderRadius: 2,
        marginHorizontal: 8
    }
};

export default props => (
    <View
        {...props}
        style={{ ...Style.container, ...props.style }}
        elevation={props.elevation || 2}
    >
        {props.children}
    </View>
);
