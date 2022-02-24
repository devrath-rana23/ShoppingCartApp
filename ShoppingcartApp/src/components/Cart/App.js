import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FloatingTitleTextInputField } from './floating_title_text_input_field';

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
  }

  _updateMasterState = (attrName, value) => {
    this.setState({ [attrName]: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text  style = {styles.headerText}>Its Amazing</Text>
        <FloatingTitleTextInputField
          attrName = 'firstName'
          title = 'First Name'
          value = {this.state.firstName}
          updateMasterState = {this._updateMasterState}
          textInputStyles = {{ // here you can add additional TextInput styles
            color: 'green',
            fontSize: 15,
          }}
          otherTextInputProps = {{   // here you can add other TextInput props of your choice
            maxLength: 12,
          }}
        />
        <FloatingTitleTextInputField
          attrName = 'lastName'
          title = 'Last Name'
          value = {this.state.lastName}
          updateMasterState = {this._updateMasterState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 16,
    color: 'black',
  }
});