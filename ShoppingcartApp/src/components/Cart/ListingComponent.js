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
  ADDRESS_SCREEN_NAME,
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
              onPress={() => navigation.navigate(ADDRESS_SCREEN_NAME)}>
              <Text>Save Address</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <View style={styles.homeScreen}>
          <Text style={styles.homeScreenText}>Welcome!</Text>
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
  homeScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeScreenText: {
    fontSize: 70,
    color: COLORS.black,
  },
});

export default ListingComponent;
