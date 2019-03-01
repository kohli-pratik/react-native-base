import React, { Component } from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import updateTestAttr from './sampleAction';

class SampleScreen extends Component {
    onUpdateStore = () => {
        this.props.onUpdateStore('New Header');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.onUpdateStore()} style={{ flex: 1 }}>
                    <Header title={this.props.testAttr}></Header>
                </TouchableWithoutFeedback>
                <View style={styles.body}>
                    <Text>This is the sample screen 1 body.</Text>
                    <Button title='Go to SampleScreen 2' onPress={() => this.props.navigation.navigate('Sample2')}></Button>
                </View>
                <Footer></Footer>
            </View>
        );
    }
}


SampleScreen.propTypes = {
    onUpdateStore: PropTypes.func,
    navigation: PropTypes.object,
    testAttr: PropTypes.string,
};

const mapStateToProps = state => ({
    testAttr: state.testAttr,
});

const mapActionsToProps = {
    onUpdateStore: updateTestAttr,
};

export default connect(mapStateToProps, mapActionsToProps)(SampleScreen);