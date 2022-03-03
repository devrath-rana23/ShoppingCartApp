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
    const {
      savedAddressItemsDummy,
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
    } = this.props.addresses;

    const listItems = ({item}) => {
      return (
        <View style={styles.listView}>
          <Text>Name</Text>
        </View>
      );
    };
    const formFooter = () => {
      return (
        <View style={styles.formFooterView}>
          <Text>Footer</Text>
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
            style={{height: '90%'}}
            showsVerticalScrollIndicator={false}
            data={savedAddressItemsDummy}
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
  addNewButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  listView: {
    flex: 6,
  },
  formFooterView: {
    flex: 2,
  },
});

export default SavedAddressesScreen;
