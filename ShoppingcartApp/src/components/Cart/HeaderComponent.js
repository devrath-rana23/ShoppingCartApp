import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  SHOPPING_CART,
  HAMBURGER_ICON,
  ARROW_LEFT,
  HEART_TRANSPARENT_ICON,
} from '../../utility/appConstant/ImageUrls';
import {
  HOME_SCREEN_NAME,
  CARTITEMS_SCREEN_NAME,
  WISHLIST_SCREEN_NAME,
} from '../../utility/appConstant/AppConstants';
import {inject, observer} from 'mobx-react';
import {COLORS} from '../../utility/appConstant/Styles';

@inject('cartitems')
@observer
class HeaderComponent extends Component {
  render() {
    const {cartCount, wishlistCount} = this.props.cartitems;

    return (
      <View style={styles.header}>
        <View style={styles.navButton}>
          {this.props.screen == HOME_SCREEN_NAME ? (
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image style={styles.hamburger} source={HAMBURGER_ICON} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.cartButton}>
              <Image style={styles.hamburger} source={ARROW_LEFT} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.headerText}>{this.props.screen}</Text>
        <View style={styles.functionalButtons}>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() =>
              this.props.navigation.navigate(WISHLIST_SCREEN_NAME)
            }>
            <Image source={HEART_TRANSPARENT_ICON} style={styles.cartLogo} />
            {wishlistCount > 0 ? (
              <View style={styles.itemCount}>
                <Text style={styles.itemCountText}>{wishlistCount}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
          {this.props.is_course_list ? (
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() =>
                this.props.navigation.navigate(CARTITEMS_SCREEN_NAME)
              }>
              <Image source={SHOPPING_CART} style={styles.cartLogo} />
              {cartCount > 0 ? (
                <View style={styles.itemCount}>
                  <Text style={styles.itemCountText}>{cartCount}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default HeaderComponent;
