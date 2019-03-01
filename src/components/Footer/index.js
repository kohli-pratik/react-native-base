import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Footer</Text>
            </View>
        );
    }
}

export default Footer;
