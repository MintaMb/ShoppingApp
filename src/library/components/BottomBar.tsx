import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { useSelector } from 'react-redux';
import {AppConstants, ColorConstants} from '../constants';
import DimensionsValue from '../utils/DimensionsValue';

const BottomBar = ({state, navigation}: BottomTabBarProps) => {
  // const { userInfo } = useSelector((state: RootState) => state.userData)

  const {bottom} = useSafeAreaInsets();

  const bottomBarOptions = useMemo(() => {
    // if (userInfo.role == 'admin') return AppConstants.ADMIN_BOTTOM_STACK
    return AppConstants.CUSTOMER_BOTTOM_STACK;
    // else return []
  }, []);

  return (
    <View style={[styles.viewContainer]}>
      <View style={[styles.viewInternal]}>
        {bottomBarOptions.map((elem: any, index: number) => {
          const isFocused = state.index == index;
          return (
            <TouchableOpacity
              style={[styles.touchItem, isFocused && styles.focusedItem]}
              key={index}
              onPress={() =>
                elem.screenName && navigation.navigate(elem.screenName)
              }>
              <Image
                source={elem.image}
                style={[
                  {tintColor: isFocused ? ColorConstants.WHITE : '#dbdbdb'},
                  styles.image,
                ]}
              />

              {/* {userInfo.role === 'admin' && <Text
                style={[styles.textTitle,
                isFocused && { color: ColorConstants.WHITE }]}>{elem.title}</Text>} */}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: ColorConstants.CONTAINER_BACKGROUND,
  },
  image: {
    width: DimensionsValue.VALUE_20,
    height: DimensionsValue.VALUE_20,
  },
  focusedItem: {
    backgroundColor: ColorConstants.LIGHT_RED,
    marginTop: -DimensionsValue.VALUE_30,
    height: DimensionsValue.VALUE_60,
    width: DimensionsValue.VALUE_60,
    borderWidth: 4,
    borderColor: ColorConstants.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  touchItem: {
    alignItems: 'center',
    width: DimensionsValue.VALUE_44,
    paddingHorizontal: DimensionsValue.VALUE_10,
    height: DimensionsValue.VALUE_35,
    borderRadius: DimensionsValue.VALUE_44,
    justifyContent: 'center',
  },
  adminTouchItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: DimensionsValue.VALUE_10,
    height: DimensionsValue.VALUE_44,
    borderRadius: DimensionsValue.VALUE_44,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewInternal: {
    backgroundColor: ColorConstants.WHITE,
    paddingVertical: DimensionsValue.VALUE_8,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: DimensionsValue.VALUE_20,
    flexDirection: 'row',
  },
  textTitle: {
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
    color: ColorConstants.COLOR_849DC3,
    marginLeft: DimensionsValue.VALUE_10,
    fontSize: DimensionsValue.VALUE_16,
  },
});
