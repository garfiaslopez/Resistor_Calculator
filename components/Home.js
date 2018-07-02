/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import CustomPicker from './CustomPicker';
import functions from '../helpers/conversor';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        textAlign: 'center',
        height: 50,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20
    },
    button: {
        width: '60%',
        marginTop: 40,
        backgroundColor: '#03A9F4'
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

class Home extends Component {
    static navigationOptions = {
        title: 'BIN -> DEC n_n',
    };
    constructor(props){
        super(props);

        this.state = {
            textfield: '',
            result: 0
        }

        this.clear = this.clear.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }
    componentWillMount() {
        console.log("Me voy a subir al DOM.");
    }
    componentDidMount() {
        console.log("Ya me subí al DOM.");
    }
    componentDidUnMount() {
        console.log("Ya me bajé del DOM.");
    }
    clear() {
        this.setState({
            textfield: '',
            result: 0
        });
    }
    onChangeText(text) {
        var res = parseInt(text, 2);
        this.setState({
            textfield: text,
            result: res
        });
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>
                    Ingresa un valor BIN
                </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={this.onChangeText}
                    value={this.state.textfield}
                />

                <Text style={styles.title}>
                    Resultado: {this.state.result}
                </Text>

                <TouchableHighlight
                    style={styles.button}
                    onPress={this.clear}>
                    <Text style={styles.textButton}>
                        Limpiar
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Home;
