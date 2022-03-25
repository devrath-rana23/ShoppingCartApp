import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {APP_LOGO_IMAGE} from '../../utility/appConstant/ImageUrls';
import {COLORS} from '../../utility/appConstant/Styles';
import HeaderComponent from './HeaderComponent';
import {
  HOME_SCREEN_NAME,
  CARTITEMS_SCREEN_NAME,
  WISHLIST_SCREEN_NAME,
  SAVED_ADDRESS_SCREEN_NAME,
} from '../../utility/appConstant/AppConstants';

const ListingComponent = ({
  navigation,
  is_course_list,
  state,
  listItems,
  styleListView,
  screen,
  cartItemsCount,
  wishlistItemsCount,
}) => {
  return (
    <View style={styles.bodyStyle}>
      <HeaderComponent
        navigation={navigation}
        is_course_list={is_course_list}
        screen={screen}
      />
      <View style={styles.imageView}>
        <Image style={styles.image} source={APP_LOGO_IMAGE} />
      </View>

      {screen != HOME_SCREEN_NAME ? (
        screen != CARTITEMS_SCREEN_NAME ? (
          screen != WISHLIST_SCREEN_NAME ? (
            <View style={styleListView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={state}
                initialNumToRender={4}
                renderItem={listItems}
                keyExtractor={courses => courses.id}
              />
            </View>
          ) : wishlistItemsCount == 0 ? (
            <View style={styles.homeScreen}>
              <Text style={styles.homeScreenText}>No items!</Text>
            </View>
          ) : (
            <View style={styleListView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={state}
                initialNumToRender={4}
                renderItem={listItems}
                keyExtractor={courses => courses.id}
              />
            </View>
          )
        ) : cartItemsCount == 0 ? (
          <View style={styles.homeScreen}>
            <Text style={styles.homeScreenText}>No items!</Text>
          </View>
        ) : (
          <View style={styleListView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state}
              initialNumToRender={4}
              renderItem={listItems}
              keyExtractor={courses => courses.id}
            />
            <TouchableOpacity
              style={styles.saveAddressBtn}
              onPress={() => navigation.navigate(SAVED_ADDRESS_SCREEN_NAME)}>
              <Text style={styles.saveAddressButton}>Saved Location</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <View style={styles.homeScreen}>
          <View>
            <Text style={styles.ItemByCatHeading}>Men's Fashion</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={state.filter(courses => courses.category_id == 1)}
              initialNumToRender={4}
              renderItem={({item}) => (
                <View style={styles.itemContainerByCat}>
                  <Image
                    style={styles.itemImageByCat}
                    source={{uri: item.image_url}}
                  />
                  <Text>{item.name.substring(0, 15)}...</Text>
                </View>
              )}
              keyExtractor={courses => courses.id}
            />
          </View>
          <View>
            <Text style={styles.ItemByCatHeading}>Women's Fashion</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={state.filter(courses => courses.category_id == 2)}
              initialNumToRender={4}
              renderItem={({item}) => (
                <View style={styles.itemContainerByCat}>
                  <Image
                    style={styles.itemImageByCat}
                    source={{uri: item.image_url}}
                  />
                  <Text>{item.name.substring(0, 15)}...</Text>
                </View>
              )}
              keyExtractor={courses => courses.id}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bodyStyle: {
    backgroundColor: COLORS.whiteForScreenBackground,
    flex: 1,
  },
  homeScreen: {
    marginTop: 50,
  },
  itemImageByCat: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  itemContainerByCat: {
    marginBottom: 10,
    backgroundColor: COLORS.whiteForItemCardBackground,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  ItemByCatHeading: {
    marginLeft: 10,
    fontSize: 25,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  imageView: {
    flex: 0.35,
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 360,
  },
  itemContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemImage: {
    flex: 1,
    height: 65,
    width: 80,
    borderRadius: 50,
  },
  button: {
    backgroundColor: COLORS.blueForButtonBackground,
    borderRadius: 10,
    padding: 10,
  },
  itemDetails: {
    marginLeft: 5,
    flex: 3,
  },
  itemButton: {
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
  },
  saveAddressButton: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
  },
  saveAddressBtn: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
  },
});

export default ListingComponent;
