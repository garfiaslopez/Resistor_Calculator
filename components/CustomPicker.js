import React, { Component } from 'react';
import colors from '../helpers/colors';

import {
  StyleSheet,
  View,
  Picker
} from 'react-native';

//import Item from 'react-native/Libraries/Components/Picker';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#F5FCFF',
    }
});

class CustomPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: 'java',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(itemValue, itemIndex) {
        this.setState({
            language: itemValue
        });
    }
    render() {
        return (
            <Picker
                selectedValue={this.state.language}
                onValueChange={this.handleChange}
            >
                <Picker.Item label={'JAVA'} value={'java'} />
                <Picker.Item label={'JAVASCRIPT'} value={'js'} />
            </Picker>
        );
    }
}

export default CustomPicker;
