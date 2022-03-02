import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {inject, observer} from 'mobx-react';
import {
  HAMBURGER_ICON,
  ARROW_LEFT,
  BLACK_TICK_ICON,
  GREEN_TICK_ICON,
} from '../../utility/appConstant/ImageUrls';
import {ADDRESS_SCREEN_NAME} from '../../utility/appConstant/AppConstants';
import {COLORS} from '../../utility/appConstant/Styles';
import SelectDropdown from 'react-native-select-dropdown';
import {AddressTextInputComponent} from '../../components/Cart/AddressTextInputComponent';

@inject('cartitems')
@observer
class AddressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
  }

  render() {
    const states = [
      'Uttar Pradesh',
      'Uttrakhand',
      'Himachal Pradesh',
      'Karnataka',
    ];

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <View style={styles.navButton}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.cartButton}>
                <Image style={styles.hamburger} source={ARROW_LEFT} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>{ADDRESS_SCREEN_NAME}</Text>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image style={styles.hamburger} source={HAMBURGER_ICON} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Text style={styles.headingText}>Add Address</Text>
            <Text style={styles.addYourAddress}>Please add your address</Text>
            {/* <AddressTextInputComponent /> */}
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
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
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
                placeholder="10 - Digit mobile number"
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
            </View>
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
                placeholder="Pincode"
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
            </View>
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
                placeholder="Locality"
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
            </View>
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected
                    ? styles.inputAddress
                    : styles.inputAddressNotSelected
                }
                placeholder="Address (Area and Street)"
                onChangeText={() => {}}
                multiline={true}
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
            </View>
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
                placeholder="City/District/Town"
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
            </View>
            <View style={styles.inputView}>
              <SelectDropdown
                buttonStyle={
                  this.state.isSelected
                    ? styles.dropdown
                    : styles.dropdownNotSelected
                }
                data={states}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText="Select state"
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
                placeholder="Land Mark"
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
            </View>
            <View style={styles.inputView}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  this.state.isSelected ? styles.input : styles.inputNotSelected
                }
                placeholder="Alternate Phone(Optional)"
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
            </View>
            <View>
              <Text style={styles.addressTypeText}>Address Type</Text>
            </View>
            <View style={styles.addressTypeButtons}>
              <TouchableOpacity style={styles.adressButtons}>
                <Image style={styles.addressIcons} source={BLACK_TICK_ICON} />
                <Text style={styles.adressButtonsText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.adressButtons}>
                <Image style={styles.addressIcons} source={BLACK_TICK_ICON} />
                <Text style={styles.adressButtonsText}>Work</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.formActionButtonsSave}>
                <Text style={styles.formActionButtonsText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.formActionButtonsCancel}>
                <Text style={styles.formActionButtonsText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    paddingVertical: 10,
    color: COLORS.black,
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'center',
  },
  navButton: {
    flex: 1,
  },
  hamburger: {
    height: 24,
    width: 24,
  },
  functionalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.6,
  },
  cartLogo: {
    height: 24,
    width: 24,
  },
  itemCount: {
    marginTop: 6,
    marginLeft: 12,
    height: 14,
    width: 14,
    position: 'absolute',
    borderRadius: 40,
    backgroundColor: COLORS.purple,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCountText: {
    color: COLORS.whiteForScreenBackground,
    fontSize: 8,
  },
  cartButton: {
    paddingVertical: 10,
  },
  body: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.black,
  },
  addYourAddress: {
    marginBottom: 5,
  },
  inputView: {
    marginTop: 4,
  },
  addressTypeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.black,
    marginTop: 20,
  },
  inputAddress: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 50,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: 9,
    textAlign: 'center',
  },
  inputAddressNotSelected: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6cccb',
    paddingHorizontal: 5,
    paddingVertical: 50,
    borderRadius: 5,
    marginTop: 9,
    textAlign: 'center',
  },
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
  dropdown: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    borderRadius: 5,
    marginTop: 9,
    backgroundColor: '#fff',
  },
  dropdownNotSelected: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6cccb',
    padding: 5,
    borderRadius: 5,
    marginTop: 9,
    backgroundColor: '#fff',
  },
  nameFieldText: {
    position: 'absolute',
    marginLeft: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  addressTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressIcons: {
    height: 10,
    width: 10,
  },
  adressButtons: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6cccb',
    paddingVertical: 10,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  adressButtonsText: {
    fontSize: 20,
  },
  formActionButtonsSave: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    marginVertical: 20,
  },
  formActionButtonsCancel: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  formActionButtonsText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddressScreen;
