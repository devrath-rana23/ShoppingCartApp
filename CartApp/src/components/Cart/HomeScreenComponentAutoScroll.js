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
import ListingComponent from './ListingComponent';
import {HOME_SCREEN_NAME} from '../../utility/appConstant/AppConstants';
import {inject, observer} from 'mobx-react';
import {COLORS} from '../../utility/appConstant/Styles';
import HeaderComponent from './HeaderComponent';
import {APP_LOGO_IMAGE} from '../../utility/appConstant/ImageUrls';
const NO_PER_SCREEN = 1;
const itemWidth = Dimensions.get('window').width / NO_PER_SCREEN;
class HomeScreenComponentAutoScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      scrolling: false,
      momentumScrolling: false,
    };
  }

  componentDidMount() {
    this.startScroll();
  }

  // Clear interval when user closes
  componentWillUnmount() {
    clearInterval(this.activeInterval);
  }

  startScroll() {
    this.activeInterval = setInterval(this.scrolling, 32);
  }

  clearScrolling() {
    if (this.activeInterval) {
      clearInterval(this.activeInterval);
      this.activeInterval = null;
    }
  }

  scrolling = () => {
    // Start scrolling if there's more than one stock to display

    

    const data = this.props.cartitems;
    let {currentPosition} = this.state;
    if (currentPosition < 0) {
      currentPosition = 0;
    }
    if (data.length > 1) {
      // Increment position with each new interval
      const position = currentPosition + 0.5;
      this.ticker.scrollToOffset({offset: position, animated: false});
      // After position passes this value, snaps back to beginning
      const maxOffset = data.length * itemWidth;
      // Set animation to repeat at end of scroll
      if (currentPosition > maxOffset) {
        const offset = currentPosition - maxOffset;
        this.ticker.scrollToOffset({
          offset,
          animated: false,
        });
        this.setState({currentPosition: offset});
      } else {
        this.setState({currentPosition: position});
      }
    }
  };

  onMomentumScrollBegin = () => {
    this.setState({
      momentumScrolling: true,
    });
    this.clearScrolling();
  };

  onMomentumScrollEnd = event => {
    const {momentumScrolling} = this.state;
    if (momentumScrolling) {
      this.setState({
        momentumScrolling: false,
        currentPosition: event.nativeEvent.contentOffset.x,
      });
      this.startScroll();
    }
  };

  onScrollBegin = () => {
    this.setState({
      scrolling: true,
    });
    this.clearScrolling();
  };

  onScrollEnd = event => {
    this.setState({
      scrolling: false,
      currentPosition: event.nativeEvent.contentOffset.x,
    });
    this.startScroll();
  };

  onTouchBegin = () => {
    this.clearScrolling();
  };

  onTouchEnd = () => {
    const {scrolling} = this.state;
    if (!scrolling) {
      this.startScroll();
    }
  };

  getWrappedData = () => {
    

    const data = this.props.cartitems;
    const overlappingNo = this.getOverlappingNo();
    return {
      data: [...data, ...data.slice(0, overlappingNo)],
    };
  };

  getOverlappingNo = () => {
    

    const data = this.props.cartitems;
    const {length} = data;
    let overlappingNo = 10;
    if (length < 10) {
      overlappingNo = length;
    }
    return overlappingNo;
  };

  render() {
    const {data} = this.getWrappedData();

    return (
      // <SafeAreaView style={styles.safeAreaView}>
      //   <ListingComponent
      //     navigation={this.props.navigation}
      //     is_course_list={true}
      //     screen={HOME_SCREEN_NAME}
      //     cartItemsCount={this.props.cartitems.cartCount}
      //     state={cartItems}
      //   />
      // </SafeAreaView>

      <View>
        <Text style={styles.ItemByCatHeading}>{this.props.categoryName}</Text>
        <FlatList
          ref={ref => {
            this.ticker = ref;
          }}
          decelerationRate="fast"
          onTouchStart={this.onTouchBegin}
          onTouchEnd={this.onTouchEnd}
          onScrollBeginDrag={this.onScrollBegin}
          onScrollEndDrag={this.onScrollEnd}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          getItemLayout={(_, index) => ({
            length: data.length,
            offset: itemWidth * index,
            index,
          })}
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View style={styles.itemContainerByCat}>
              <Image
                style={styles.itemImageByCat}
                source={{uri: item.image_url}}
              />
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={courses => courses.id + Math.random(999)}
        />
      </View>
    );
  }
}

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

export default HomeScreenComponentAutoScroll;
