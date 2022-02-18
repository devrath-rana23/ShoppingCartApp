import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  MEN_ICON,
  WOMEN_ICON,
  ARROW_RIGHT,
  ARROW_DOWN_ICON,
} from '../../utility/appConstant/ImageUrls';
import {CATEGORY_SCREEN_NAME} from '../../utility/appConstant/AppConstants';
import {COLORS} from '../../utility/appConstant/Styles';

const ExpandableComponent = ({item, onClickFunction, navigation}) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  const navigateWithParams = item => {
    return navigation.navigate(CATEGORY_SCREEN_NAME, {
      category: item.cat,
      subcategory: item.val,
      category_id: item.category_id,
      subcategory_id: item.subcategory_id,
    });
  };

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={item.category_name == `Men's Fashion` ? MEN_ICON : WOMEN_ICON}
        />
        <Text style={styles.headerText}>{item.category_name}</Text>
        {item.isExpanded == false ? (
          <Image style={styles.headerIcon} source={ARROW_RIGHT} />
        ) : (
          <Image style={styles.headerIcon} source={ARROW_DOWN_ICON} />
        )}
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => {
              navigateWithParams(item);
            }}>
            <Text style={styles.text}>{item.val}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.categoryDrawerNavigationButtonBackground,
    padding: 20,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    color: COLORS.subCategoryDrawerNavigationButtonText,
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLORS.whiteForScreenBackground,
    alignSelf: 'center',
  },
  headerIcon: {
    height: 22,
    width: 22,
  },
});

export default ExpandableComponent;
