import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import Toast from 'react-native-easy-toast';
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

    const {
      addressItemsDummy,
      updateIsSelectedForAddressItems,
      homeButtonSelected,
      workButtonSelected,
      updateHomeWorkButtonSelected,
      updateValueOfTextInput,
      updateFieldStateValue,
      name,
      mobile,
      pincode,
      locality,
      addressArea,
      addressCity,
      addressState,
      addressLandmark,
      alternatePhone,
      addressType,
    } = this.props.cartitems;

    const keyboardType = fieldType => {
      switch (fieldType) {
        default:
          return 'default';

        case 'text':
          return 'default';

        case 'mobile':
          return 'numeric';

        case 'integer':
          return 'numeric';
      }
    };

    const _returnAnimatedTitleStyles = (is_selected, value) => {
      const [
        titleActiveColor,
        titleInactiveColor,
        titleActiveSize,
        titleInActiveSize,
        whiteColor,
      ] = ['black', 'dimgrey', 11.5, 15, 'rgba(255, 255, 255, 1)'];

      let position = new Animated.Value(value ? 1 : 0);

      return {
        top: position.interpolate({
          inputRange: [0, 1],
          outputRange: [14, 0],
        }),
        fontSize: is_selected ? titleActiveSize : titleInActiveSize,
        color: is_selected ? titleActiveColor : titleInactiveColor,
        backgroundColor: whiteColor,
      };
    };

    const _handleFocus = (is_selected, value) => {
      if (!is_selected) {
        let position = new Animated.Value(value ? 1 : 0);
        Animated.timing(position, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      }
    };

    _handleBlur = (is_selected, value) => {
      if (is_selected && !value) {
        let position = new Animated.Value(value ? 1 : 0);
        Animated.timing(position, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start();
      }
    };

    const listItems = ({item}) => {
      return (
        <View style={styles.inputView}>
          {!item.is_dropdown ? (
            <View>
              <TextInput
                value={item.value}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                // style={[styles.textInput, styles.customTextInput]}
                style={
                  item.is_address
                    ? item.is_selected
                      ? styles.inputAddress
                      : styles.inputAddressNotSelected
                    : item.is_selected
                    ? styles.input
                    : styles.inputNotSelected
                }
                onChangeText={text => {
                  updateFieldStateValue(item.field_name, text);
                  updateValueOfTextInput(item.id, text);
                }}
                multiline={item.is_address ? true : false}
                // placeholder={item.is_selected ? '' : item.placeholder_name}
                keyboardType={keyboardType(item.field_type)}
                maxLength={item.mobile ? 10 : 100}
                onFocus={() => {
                  _handleFocus(item.is_selected, item.value);
                  updateIsSelectedForAddressItems(item.id, true);
                }}
                onBlur={() => {
                  _handleBlur(item.is_selected, item.value);
                  updateIsSelectedForAddressItems(item.id, false);
                }}
              />
              <Animated.Text
                style={[
                  styles.titleStyles,
                  _returnAnimatedTitleStyles(item.is_selected, item.value),
                ]}>
                {item.placeholder_name}
              </Animated.Text>
              {/* {item.is_selected ? (
                <Text style={styles.nameFieldText}>
                  {item.placeholder_name}
                </Text>
              ) : null} */}
            </View>
          ) : (
            <View
              style={{
                marginTop: 9,
                width: '100%',
              }}>
              <SelectDropdown
                buttonStyle={styles.dropDownButtonStyle}
                buttonTextStyle={styles.dropDownButtonTextStyle}
                dropdownStyle={{}}
                rowStyle={{}}
                rowTextStyle={{}}
                data={states}
                onSelect={(selectedItem, index) => {
                  updateFieldStateValue(item.field_name, selectedItem);
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
          )}
        </View>
      );
    };

    const _validationHandler = () => {
      if (!(name.length > 0)) {
        this.toast.show('The name field is required.');
      } else if (!(mobile.length > 0 && mobile.length == 10)) {
        this.toast.show('Enter 10-digit mobile number.');
      } else if (!(pincode.length > 0 && pincode.length == 6)) {
        this.toast.show('Enter valid pincode.');
      } else if (!(locality.length > 0)) {
        this.toast.show('The locality field is required.');
      } else if (!(addressArea.length > 0)) {
        this.toast.show('The Address(Area and Street) field is required.');
      } else if (!(addressCity.length > 0)) {
        this.toast.show('The City/District/Town field is required.');
      } else if (!(addressState != 'Select state')) {
        this.toast.show('Please select a state.');
      } else if (!(addressLandmark.length > 0)) {
        this.toast.show('The Landmark field is required.');
      } else if (!(addressType.length > 0)) {
        this.toast.show('Please select Address Type.');
      }
      if (alternatePhone.length > 0) {
        if (!(alternatePhone.length == 10)) {
          this.toast.show('Enter 10-digit Alternate Phone number.');
        }
      }
    };

    const formHeader = () => {
      return (
        <View>
          <Text style={styles.headingText}>Add Address</Text>
          <Text style={styles.addYourAddress}>Please add your address</Text>
        </View>
      );
    };

    const formFooter = () => {
      return (
        <View>
          <View>
            <Text style={styles.addressTypeText}>Address Type</Text>
          </View>
          <View style={styles.addressTypeButtons}>
            <TouchableOpacity
              onPress={() => {
                updateHomeWorkButtonSelected(true, false);
                updateFieldStateValue('addressType', 'Home');
              }}
              style={
                homeButtonSelected
                  ? styles.adressButtonsSelected
                  : styles.adressButtons
              }>
              <Image
                style={styles.addressIcons}
                source={homeButtonSelected ? GREEN_TICK_ICON : BLACK_TICK_ICON}
              />
              <Text style={styles.adressButtonsText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateHomeWorkButtonSelected(false, true);
                updateFieldStateValue('addressType', 'Work');
              }}
              style={
                workButtonSelected
                  ? styles.adressButtonsSelected
                  : styles.adressButtons
              }>
              <Image
                style={styles.addressIcons}
                source={workButtonSelected ? GREEN_TICK_ICON : BLACK_TICK_ICON}
              />
              <Text style={styles.adressButtonsText}>Work</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => _validationHandler()}
              style={styles.formActionButtonsSave}>
              <Text style={styles.formActionButtonsText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.formActionButtonsCancel}>
              <Text style={styles.formActionButtonsText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.safeAreaView}>
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
          <FlatList
            style={{height: '90%'}}
            showsVerticalScrollIndicator={false}
            data={addressItemsDummy}
            initialNumToRender={9}
            renderItem={listItems}
            keyExtractor={items => items.id}
            ListHeaderComponent={formHeader}
            ListFooterComponent={formFooter}
          />
        </View>
        <Toast
          ref={toast => (this.toast = toast)}
          style={{backgroundColor: '#e6dfda'}}
          position="top"
          positionValue={100}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color: 'black'}}
        />
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
    height: 15,
    width: 15,
    marginRight: 5,
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
  adressButtonsSelected: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'green',
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
  dropDownButtonStyle: {
    borderWidth: 1,
    borderColor: '#d6cccb',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
  dropDownButtonTextStyle: {
    color: '#000',
    fontSize: 17,
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 4,
  },
  textInput: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
  customTextInput: {
    color: 'green',
    fontSize: 15,
  },
});

export default AddressScreen;
