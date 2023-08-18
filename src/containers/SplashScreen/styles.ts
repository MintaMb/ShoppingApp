import {Dimensions, StyleSheet} from 'react-native';
import {AppConstants, ColorConstants} from '../../library/constants';
import DimensionsValue from '../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: ColorConstants.DARK_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: DimensionsValue.VALUE_100,
    width: DimensionsValue.VALUE_100,
    resizeMode: 'contain',
  },
  textAppName: {
    marginTop: DimensionsValue.VALUE_10,
    fontFamily: AppConstants.FONT_OUTFIT_EXTRA_BOLD,
    fontSize: DimensionsValue.VALUE_30,
    textAlign: 'center',
    color: ColorConstants.LIGHT_RED,
  },
});

export default styles;
