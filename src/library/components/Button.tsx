import React, { FC } from 'react';
import { Text, Dimensions, TouchableOpacity, ActivityIndicator, View, Image, StyleSheet, ImageSourcePropType, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { AppConstants, ColorConstants } from '../constants';
import DimensionsValue from '../utils/DimensionsValue';
const { width, } = Dimensions.get('window');

type Props = {
  title: string,
  isLoading?: boolean,
  disabled?: boolean,
  onPress: () => void,
  leftImage?: ImageSourcePropType,
  rightImage?: ImageSourcePropType,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  leftImageStyles?: StyleProp<ImageStyle>,
  rightImageStyles?: StyleProp<ImageStyle>
}
const Button: React.FC<Props> = ({ title, isLoading, disabled, onPress, leftImage, rightImage,
  containerStyle, textStyle, leftImageStyles, rightImageStyles
}) => {

  return (

    <TouchableOpacity disabled={isLoading || disabled} style={[styles.touchContainer,
    disabled && { backgroundColor: ColorConstants.TAB_BACKGROUND }, containerStyle]} onPress={onPress}>
      {isLoading ? <ActivityIndicator color={'#FFF'} /> :
        <View style={styles.rootView}>
          {leftImage && <Image style={[styles.buttonLeftImage, leftImageStyles]} source={leftImage} />}
          <Text style={[styles.titleLabel, textStyle,]}>{title}</Text>
          {rightImage && <Image style={[styles.buttonRightImage, rightImageStyles]} source={rightImage} />}
        </View>}
    </TouchableOpacity>
  );
}

export default Button

const styles = StyleSheet.create({
  touchContainer: {
    alignSelf: 'center',
    height: DimensionsValue.VALUE_54,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    borderRadius: DimensionsValue.VALUE_20,
    backgroundColor: ColorConstants.DARK_BLUE,
    paddingHorizontal: DimensionsValue.VALUE_10
  },
  titleLabel: {
    color: ColorConstants.WHITE,
    fontFamily: AppConstants.FONT_OUTFIT_MEDIUM,
    fontSize: DimensionsValue.VALUE_16
  },
  rootView: {
    flexDirection: 'row'
  },
  buttonRightImage: {
    marginEnd: 5,
    alignSelf: 'center'
  },
  buttonLeftImage: {
    marginEnd: 5,
    alignSelf: 'center'
  },
});
