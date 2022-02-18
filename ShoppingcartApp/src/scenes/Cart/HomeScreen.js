import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListingComponent from '../../components/Cart/ListingComponent';
import {HOME_SCREEN_NAME} from '../../utility/appConstant/AppConstants';
import {inject, observer} from 'mobx-react';

@inject('cartitems')
@observer
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ListingComponent
          navigation={this.props.navigation}
          is_course_list={true}
          screen={HOME_SCREEN_NAME}
          cartItemsCount={this.props.cartitems.cartCount}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default HomeScreen;
