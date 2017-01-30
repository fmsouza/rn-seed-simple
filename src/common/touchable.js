import React from 'react';
import { View, TouchableHighlight } from 'react-native';

export default props => (
    <TouchableHighlight
        {...props}
        activeOpacity={props.activeOpacity || 0.5}
        underlayColor={props.underlayColor || '#00000000'}
    >
        <View>
            {props.children}
        </View>
    </TouchableHighlight>
);
