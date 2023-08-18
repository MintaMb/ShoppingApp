import {StyleSheet} from 'react-native';
import {AppConstants} from '../../library/constants';
import ColorConstants from '../../library/constants/ColorConstants';
import DimensionsValue from '../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.APP_BACKGROUND_COLOR,
  },
  innerContainer: {
    alignSelf: 'center',
    backgroundColor: ColorConstants.WHITE,
    height: DimensionsValue.VALUE_530,
    width: DimensionsValue.VALUE_350,
    borderRadius: DimensionsValue.VALUE_20,
    marginTop: DimensionsValue.VALUE_30,
    paddingHorizontal: DimensionsValue.VALUE_20,
  },
  viewProfileImage: {
    flexDirection: 'row',
    marginTop: DimensionsValue.VALUE_20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageProfile: {
    height: DimensionsValue.VALUE_80,
    width: DimensionsValue.VALUE_80,
    resizeMode: 'contain',
    borderRadius: DimensionsValue.VALUE_30,
    borderWidth: 1,
  },
  textEditProfile: {
    color: ColorConstants.WHITE,
    fontFamily: AppConstants.FONT_OUTFIT_EXTRA_BOLD,
    fontSize: DimensionsValue.VALUE_14,
  },
  buttonEditProfile: {
    backgroundColor: ColorConstants.LIGHT_RED,
    width: DimensionsValue.VALUE_200,
    height: DimensionsValue.VALUE_38,
    borderRadius: DimensionsValue.VALUE_15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
