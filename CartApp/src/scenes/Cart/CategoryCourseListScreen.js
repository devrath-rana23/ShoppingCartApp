import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListingComponent from '../../components/Cart/ListingComponent';
import {COLORS} from '../../utility/appConstant/Styles';
import {inject, observer} from 'mobx-react';
import {
  ADD_PLACEHOLDER,
  RUPEE_PLACEHOLDER,
} from '../../utility/appConstant/AppConstants';
import {
  HEART_TRANSPARENT_ICON,
  HEART_ICON,
} from '../../utility/appConstant/ImageUrls';

@inject('cartitems')
@observer
class CategoryCourseListScreen extends Component {
  componentDidMount() {
    const {category_id, subcategory_id} = this.props.route.params;
    const {getCategoryCourses} = this.props.cartitems;

    getCategoryCourses(category_id, subcategory_id);
  }

  render() {
    const {category_id, subcategory_id, category} = this.props.route.params;
    const {
      cartItems,
      editCourse,
      getCategoryCourses,
      cartCount,
      wishlistCount,
    } = this.props.cartitems;

    this.props.navigation.addListener('focus', () => {
      getCategoryCourses(category_id, subcategory_id);
    });

    const listItems = ({item}) => {
      

      return (
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={{uri: item.image_url}} />
          <View style={styles.itemDetails}>
            <Text style={styles.priceText}>{item.name} </Text>
            <Text>{item.subcategory_name} </Text>
            <Text style={styles.priceText}>
              {RUPEE_PLACEHOLDER} {item.price}
            </Text>
            {item.added != '1' ? (
              <TouchableOpacity
                style={styles.addButton}
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
                <Text style={styles.buttonText}>{ADD_PLACEHOLDER}</Text>
              </TouchableOpacity>
            ) : (
              <View>
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
            )}
          </View>
          {item.is_wishlist == 0 ? (
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
              <Image
                style={styles.delteItemButton}
                source={HEART_TRANSPARENT_ICON}
              />
            </TouchableOpacity>
          ) : (
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
          )}
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
          screen={category}
          cartItemsCount={cartCount}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.whiteForItemCardBackground,
    paddingVertical: 15,
  },
  listView: {
    marginHorizontal: 10,
    flex: 1,
  },
  priceText: {
    fontWeight: 'bold',
    color: COLORS.black,
  },
  itemImage: {
    flex: 1.2,
    height: 70,
    width: 70,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: COLORS.blueForButtonBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  addButton: {
    backgroundColor: COLORS.blueForButtonBackground,
    marginRight: 125,
    paddingVertical: 6,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 5,
    flex: 4,
    alignSelf: 'center',
  },
  itemButton: {
    flex: 1.5,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.whiteForScreenBackground,
  },
  addRemoveButtonsView: {
    flexDirection: 'row',
    marginRight: 125,
    justifyContent: 'space-between',
  },
  itemCountText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  deleteButton: {
    marginRight: 5,
  },
  delteItemButton: {
    height: 25,
    width: 25,
  },
});

export default CategoryCourseListScreen;
