import React, {Children, FC, ReactElement} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle as NativeImageStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {AppConstants, ColorConstants, ScreenConstants} from '../constants';
import {navigate} from '../helper/RootNavigation';
import DimensionsValue from '../utils/DimensionsValue';

type Props = {
  leftIcon?: ImageSourcePropType;
  tapOnLeftIcon?: () => void;
  tapOnRightIcon?: () => void;
  title?: string;
  rightIcon?: ImageSourcePropType;
  rightIconStyle?: StyleProp<ImageStyle> & StyleProp<NativeImageStyle>;
  leftIconStyle?: StyleProp<ImageStyle> & StyleProp<NativeImageStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  showRightIcon?: boolean | null;
  showUserProfileImage?: boolean;
  searchValue?: string;
  onChangeText?: () => void;
  renderExtraItem?: () => ReactElement;
  childern?: any;
};

const Header: FC<Props> = ({
  leftIcon,
  tapOnLeftIcon,
  title = null,
  rightIcon,
  tapOnRightIcon,
  rightIconStyle,
  leftIconStyle,
  headerStyle,
  titleStyle,
  childern,
  showRightIcon = true,
  showUserProfileImage = false,
  searchValue,
  onChangeText,
  renderExtraItem,
  ...titleProps
}) => {
  return (
    <View style={[styles.viewHeader, headerStyle]}>
      {leftIcon ? (
        <TouchableOpacity
          hitSlop={AppConstants.HITSLOP_SMALL}
          onPress={() => tapOnLeftIcon && tapOnLeftIcon()}
          style={styles.touchLeftIcon}>
          <Image
            source={leftIcon}
            style={[styles.imageLeftIcon, leftIconStyle]}
          />
        </TouchableOpacity>
      ) : null}

      {title ? (
        <View style={styles.viewTitle}>
          <Text {...titleProps} style={[styles.textTitle, titleStyle]}>
            {title}
          </Text>
        </View>
      ) : null}
      {childern}
      {rightIcon ? (
        <TouchableOpacity
          hitSlop={AppConstants.HITSLOP_SMALL}
          onPress={() =>
            tapOnRightIcon
              ? tapOnRightIcon()
              : navigate(ScreenConstants.MY_PROFILE_SCREEN)
          }
          style={styles.touchImageRight}>
          <Image
            source={rightIcon}
            style={[styles.imageRightIcon, rightIconStyle]}
          />
        </TouchableOpacity>
      ) : null}
      {renderExtraItem ? renderExtraItem() : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: DimensionsValue.VALUE_18,
    color: ColorConstants.TEXT_BLACK,
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
    marginBottom: 5,
  },
  viewHeader: {
    flexDirection: 'row',
    backgroundColor: ColorConstants.TRANSPARENT,
    paddingHorizontal: DimensionsValue.VALUE_16,
    marginTop: DimensionsValue.VALUE_20,
    justifyContent: 'space-between',
  },
  imageRightIcon: {
    width: DimensionsValue.VALUE_35,
    height: DimensionsValue.VALUE_35,
    borderRadius: DimensionsValue.VALUE_20,
  },
  touchImageRight: {
    width: DimensionsValue.VALUE_35,
    height: DimensionsValue.VALUE_35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DimensionsValue.VALUE_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  touchLeftIcon: {
    width: DimensionsValue.VALUE_35,
    height: DimensionsValue.VALUE_35,
    backgroundColor: ColorConstants.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DimensionsValue.VALUE_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  imageLeftIcon: {
    width: DimensionsValue.VALUE_12,
    height: DimensionsValue.VALUE_12,
  },
  viewTitle: {
    marginHorizontal: DimensionsValue.VALUE_16,
    justifyContent: 'center',
  },
  viewHorizontalLine: {
    width: DimensionsValue.VALUE_30,
    borderRadius: DimensionsValue.VALUE_30,
    height: DimensionsValue.VALUE_5,
    backgroundColor: ColorConstants.COLOR_8DA2FB,
  },
  emailTextInputStyle: {
    width: '100%',
  },
  passTextInputContainer: {
    marginTop: DimensionsValue.VALUE_15,
  },
  imageSearch: {
    position: 'absolute',
    end: 5,
    height: DimensionsValue.VALUE_40,
    width: DimensionsValue.VALUE_40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
