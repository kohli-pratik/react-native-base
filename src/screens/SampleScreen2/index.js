import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class SampleScreen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <View style={styles.body}>
                    <Text>This is the sample screen 2 body.</Text>
                    <Button title='Go back to SampleScreen 1' onPress={() => this.props.navigation.navigate('Sample')}></Button>
                </View>
                <Footer></Footer>
            </View>
        );
    }
}

SampleScreen2.propTypes = {
    onUpdateStore: PropTypes.func,
    navigation: PropTypes.object,
    testAttr: PropTypes.string,
};

export default SampleScreen2;