import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import ExpandableComponent from '../components/Routes/ExpandableComponent';

@inject('cartitems')
@observer
class DrawerNavigation extends Component {
  constructor(props) {
    super(props);
    this.props.cartitems.getNavOptions();
  }
  render() {
    const {listDataSource, setListDataSource} = this.props.cartitems;

    const updateLayout = index => {
      const array = [...listDataSource];
      array[index]['isExpanded'] = !array[index]['isExpanded'];
      setListDataSource(array);
    };

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <ScrollView>
            {listDataSource.map((item, key) => (
              <ExpandableComponent
                key={item.category_name}
                onClickFunction={() => {
                  updateLayout(key);
                }}
                item={item}
                navigation={this.props.navigation}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerNavigation;
