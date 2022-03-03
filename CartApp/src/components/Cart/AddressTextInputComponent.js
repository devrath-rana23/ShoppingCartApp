import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const AddressTextInputComponent = () => {
  return (
    <View style={styles.inputView}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={isSelected ? styles.input : styles.inputNotSelected}
        onChangeText={() => {}}
        onFocus={() =>
          this.setState({
            isSelected: true,
          })
        }
        onEndEditing={() =>
          this.setState({
            isSelected: false,
          })
        }
      />
      <Text style={styles.nameFieldText}>Full Name</Text>
    </View>
  );
};

export default AddressTextInputComponent;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    borderRadius: 5,
    marginTop: 9,
  },
  inputNotSelected: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6cccb',
    padding: 5,
    borderRadius: 5,
    marginTop: 9,
  },
});
