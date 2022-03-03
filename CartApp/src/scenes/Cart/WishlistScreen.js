import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListingComponent from '../../components/Cart/ListingComponent';
import {COLORS} from '../../utility/appConstant/Styles';
import {inject, observer} from 'mobx-react';
import {
  WISHLIST_SCREEN_NAME,
  RUPEE_PLACEHOLDER,
} from '../../utility/appConstant/AppConstants';
import {HEART_ICON} from '../../utility/appConstant/ImageUrls';

@inject('cartitems')
@observer
class WishlistScreen extends Component {
  componentDidMount() {
    const {getWishlistItems} = this.props.cartitems;
    getWishlistItems();
    this.props.navigation.addListener('focus', () => {
      getWishlistItems();
    });
  }
  render() {
    const {cartItems, editCourse, cartCount, wishlistCount} =
      this.props.cartitems;

    const listItems = ({item}) => {
      return (
        <View>
          {item.is_wishlist == '1' ? (
            <View style={styles.itemContainer}>
              <Image style={styles.itemImage} source={{uri: item.image_url}} />
              <View style={styles.itemDetails}>
                <Text style={styles.priceText}>{item.name} </Text>
                <Text>{item.subcategory_name} </Text>
                <Text style={styles.priceText}>
                  {RUPEE_PLACEHOLDER}
                  {item.price}
                </Text>
                <View style={styles.addRemoveButtonsView}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      let count = ++item.count;
                      editCourse(
                        item.id,
                        item.name,
                        item.price,
                        item.stock,
                        count,
                        '1',
                        item.is_wishlist,
                        item.image_url,
                        item.category_id,
                        item.subcategory_id,
                        item.category_name,
                        item.subcategory_name,
                        true,
                        false,
                      );
                    }}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.itemCountText}>{item.count}</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      let count;
                      item.count > 1 ? (added = 1) : (added = 0);
                      item.count > 0 ? (count = --item.count) : (count = 0);
                      editCourse(
                        item.id,
                        item.name,
                        item.price,
                        item.stock,
                        count,
                        added,
                        item.is_wishlist,
                        item.image_url,
                        item.category_id,
                        item.subcategory_id,
                        item.category_name,
                        item.subcategory_name,
                        false,
                        false,
                      );
                    }}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  editCourse(
                    item.id,
                    item.name,
                    item.price,
                    item.stock,
                    item.count,
                    item.added,
                    item.is_wishlist,
                    item.image_url,
                    item.category_id,
                    item.subcategory_id,
                    item.category_name,
                    item.subcategory_name,
                    false,
                    false,
                    true,
                  );
                }}>
                <Image style={styles.delteItemButton} source={HEART_ICON} />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ListingComponent
          navigation={this.props.navigation}
          is_course_list={true}
          state={cartItems}
          listItems={listItems}
          styleListView={styles.listView}
          screen={WISHLIST_SCREEN_NAME}
          cartItemsCount={cartCount}
          wishlistItemsCount={wishlistCount}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  listView: {
    marginHorizontal: 10,
    flex: 1,
  },
  priceText: {
    fontWeight: 'bold',
    color: COLORS.black,
  },
  itemContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.whiteForItemCardBackground,
    paddingVertical: 15,
  },
  itemImage: {
    flex: 1,
    height: 70,
    width: 70,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: COLORS.blueForButtonBackground,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  itemDetails: {
    marginLeft: 5,
    flex: 3,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.whiteForScreenBackground,
  },
  itemCountText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  addRemoveButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 100,
  },
  deleteButton: {
    marginRight: 5,
  },
  delteItemButton: {
    height: 25,
    width: 25,
  },
});

export default WishlistScreen;
