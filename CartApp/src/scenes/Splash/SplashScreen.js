import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {APP_LOGO_IMAGE} from '../../utility/appConstant/ImageUrls';
import {APP_NAME} from '../../utility/appConstant/Environment';
import {COLORS} from '../../utility/appConstant/Styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Root');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={APP_LOGO_IMAGE}></Image>
      <Text style={styles.text}>{APP_NAME}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.darkBlue,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: COLORS.whiteForScreenBackground,
  },
});

export default SplashScreen;
