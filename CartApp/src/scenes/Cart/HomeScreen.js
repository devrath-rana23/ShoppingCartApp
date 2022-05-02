import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListingComponent from '../../components/Cart/ListingComponent';
import HomeScreenComponentAutoScroll from '../../components/Cart/HomeScreenComponentAutoScroll';
import {HOME_SCREEN_NAME} from '../../utility/appConstant/AppConstants';
import {inject, observer} from 'mobx-react';
import {COLORS} from '../../utility/appConstant/Styles';
import HeaderComponent from '../../components/Cart/HeaderComponent';
import {APP_LOGO_IMAGE} from '../../utility/appConstant/ImageUrls';
@inject('cartitems')
@observer
class HomeScreen extends Component {
  componentDidMount() {
    const {setAsyncItems} = this.props.cartitems;
    setAsyncItems();
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.bodyStyle}>
          <HeaderComponent
            navigation={this.props.navigation}
            is_course_list={true}
            screen={HOME_SCREEN_NAME}
          />
          <View style={styles.imageView}>
            <Image style={styles.image} source={APP_LOGO_IMAGE} />
          </View>
          <View style={styles.homeScreen}>
            <HomeScreenComponentAutoScroll
              navigation={this.props.navigation}
              categoryName="Men's Fashion"
              cartitems={this.props.cartitems.cartItemsDummyReq.filter(
                courses => courses.category_id == 1,
              )}
            />
            <HomeScreenComponentAutoScroll
              navigation={this.props.navigation}
              categoryName="Women's Fashion"
              cartitems={this.props.cartitems.cartItemsDummyReq.filter(
                courses => courses.category_id == 2,
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
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
    width: 390,
  },
  homeScreen: {
    marginTop: 50,
  },
  ItemByCatHeading: {
    marginLeft: 10,
    fontSize: 25,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  itemContainerByCat: {
    marginBottom: 10,
    backgroundColor: COLORS.whiteForItemCardBackground,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  itemImageByCat: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignSelf: 'center',
  },
  itemText: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
