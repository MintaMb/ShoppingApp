import React, {FC, useMemo} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import DimensionsValue from '../utils/DimensionsValue';
import {
  AppConstants,
  ColorConstants,
  ScreenConstants,
  StringConstants,
} from '../constants';
import Images from '../resources/images';
import ImageButton from './ImageButton';

const CustomDrawer: FC<DrawerContentComponentProps> = ({navigation}) => {
  const navigationOptions = useMemo(() => {
    return AppConstants.DRAWER_USER_ITEMS;
  }, []);

  const tapOnItem = (item: any) => {
    navigation.closeDrawer();
    switch (item.title) {
      case StringConstants.HOME:
        navigation.navigate(ScreenConstants.HOME_SCREEN);
        break;
      case StringConstants.MY_PROFILE:
        navigation.navigate(ScreenConstants.MY_PROFILE_SCREEN);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.viewContainer} edges={['top', 'right', 'left']}>
      <DrawerContentScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          {/* top View Here */}
          <View style={styles.innerContainer}>
            <Image source={Images.IC_LOGO} style={styles.imageLogo} />
            <Text style={styles.textTitle}>{'Shopping App'}</Text>
          </View>
        </View>

        {navigationOptions.length > 0 &&
          navigationOptions.map((item, index) => {
            return (
              <Button
                item={item}
                index={index}
                tapOnItem={() => tapOnItem(item)}
              />
            );
          })}

        {/* Item here */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const Button: React.FC<Props> = ({item, index, tapOnItem, containerStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.touchOptions, containerStyle]}
      onPress={() => tapOnItem && tapOnItem(item, index)}
      key={index}>
      <ImageButton
        image={item.icon}
        containerStyle={{
          height: DimensionsValue.VALUE_40,
          width: DimensionsValue.VALUE_40,
          backgroundColor: ColorConstants.LIGHT_RED,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DimensionsValue.VALUE_20,
          marginLeft: DimensionsValue.VALUE_20,
        }}
        imageStyle={styles.renderItemImage}
      />
      <Text style={styles.textOptions}>{item.title}</Text>
      {item.rightImage && <Image source={item.rightImage} />}
    </TouchableOpacity>
  );
};
type Props = {
  item: any;
  index: number;
  tapOnItem?: (item: any, index: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: ColorConstants.WHITE,
    borderBottomEndRadius: DimensionsValue.VALUE_20,
    borderTopRightRadius: DimensionsValue.VALUE_20,
  },
  touchOptions: {
    width: DimensionsValue.VALUE_250,
    height: DimensionsValue.VALUE_50,
    flexDirection: 'row',
    backgroundColor: 'rgba(228, 245, 253, 0.5)',
    marginTop: DimensionsValue.VALUE_20,
    borderRadius: DimensionsValue.VALUE_20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textOptions: {
    flex: 1,
    color: ColorConstants.TEXT_LIGHT_BLACK,
    fontSize: DimensionsValue.VALUE_16,
    marginStart: 8,
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
  },
  renderItemImage: {
    height: DimensionsValue.VALUE_20,
    width: DimensionsValue.VALUE_20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    marginTop: DimensionsValue.VALUE_10,
    marginHorizontal: DimensionsValue.VALUE_16,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageLogo: {
    height: DimensionsValue.VALUE_46,
    width: DimensionsValue.VALUE_48,
    resizeMode: 'contain',
  },
  textTitle: {
    alignSelf: 'center',
    marginStart: 5,
    fontFamily: AppConstants.FONT_OUTFIT_EXTRA_BOLD,
    fontSize: DimensionsValue.VALUE_18,
  },
  imageBack: {alignSelf: 'center'},
});

export default CustomDrawer;
