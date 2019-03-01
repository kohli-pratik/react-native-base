import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

class Header extends Component {
    render() {
        return (
            <View style={styles.container} {...this.props}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;