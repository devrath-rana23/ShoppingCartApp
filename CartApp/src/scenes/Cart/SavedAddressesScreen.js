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
  MOBILE_PHONE_ICON,
  ARROW_LEFT,
  BLACK_TICK_ICON,
  GREEN_TICK_ICON,
} from '../../utility/appConstant/ImageUrls';
import {
  SAVED_ADDRESS_SCREEN_NAME,
  ADDRESS_SCREEN_NAME,
} from '../../utility/appConstant/AppConstants';
import {COLORS} from '../../utility/appConstant/Styles';
import SelectDropdown from 'react-native-select-dropdown';

@inject('addresses')
@observer
class SavedAddressesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
  }
  render() {
    const {savedAddressItemsDummy, updateIsSelectedForSavedLocation} =
      this.props.addresses;

    const listItems = ({item}) => {
      return (
        <View style={styles.listView}>
          <TouchableOpacity
            onPress={() => updateIsSelectedForSavedLocation(item.id)}>
            <View style={styles.userNameView}>
              <Image
                source={item.isSelected ? GREEN_TICK_ICON : BLACK_TICK_ICON}
                style={styles.hamburger}
              />
              <Text style={styles.userNameText}>{item.name}</Text>
            </View>
            <View style={styles.addressView}>
              <Text style={styles.addressText}>{item.addressArea}</Text>
            </View>
            <View style={styles.mobileNumberView}>
              <Image source={MOBILE_PHONE_ICON} style={styles.hamburger} />
              <Text style={styles.mobileNumberText}>+91 {item.mobile}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
        </View>
      );
    };
    const FormFooter = () => {
      return (
        <View style={styles.formFooterView}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      );
    };
    const formHeader = () => {
      return (
        <View style={styles.formHeaderView}>
          <Text style={styles.headerText}>{SAVED_ADDRESS_SCREEN_NAME}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(ADDRESS_SCREEN_NAME)}
            style={styles.addNewButton}>
            <Text style={styles.addNewButtonText}>Add New</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.cartButton}>
              <Image style={styles.hamburger} source={ARROW_LEFT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            style={{height: '80%'}}
            showsVerticalScrollIndicator={false}
            data={savedAddressItemsDummy}
            initialNumToRender={9}
            renderItem={listItems}
            keyExtractor={items => items.id}
            ListHeaderComponent={formHeader}
          />
          <FormFooter />
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
  header: {
    marginHorizontal: 10,
  },
  cartButton: {
    paddingVertical: 10,
  },
  hamburger: {
    height: 24,
    width: 24,
  },
  body: {
    marginHorizontal: 10,
    flex: 10,
  },
  formHeaderView: {
    flex: 2,
    marginBottom: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  addNewButton: {
    backgroundColor: '#bdc2c9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: '#d99830',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  addNewButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  listView: {
    flex: 6,
  },
  formFooterView: {
    flex: 2,
  },
  userNameView: {
    flexDirection: 'row',
  },
  userNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  addressView: {
    marginTop: 10,
    marginLeft: 35,
  },
  addressText: {
    fontSize: 16,
  },
  mobileNumberView: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 35,
  },
  mobileNumberText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  separator: {
    borderWidth: 0.5,
    marginVertical: 10,
  },
});

export default SavedAddressesScreen;
