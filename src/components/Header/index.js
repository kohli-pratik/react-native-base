import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Header extends Component {
    render() {
        return (
            <View style={styles.container} {...this.props}>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

export default Header;
