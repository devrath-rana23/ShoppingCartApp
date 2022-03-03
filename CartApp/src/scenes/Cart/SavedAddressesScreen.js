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

const SavedAddressesScreen = () => {
  return (
    <View>
      <Text>SavedAddressesScreen</Text>
    </View>
  );
};

export default SavedAddressesScreen;

const styles = StyleSheet.create({});
