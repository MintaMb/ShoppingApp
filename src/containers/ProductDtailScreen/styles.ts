import {StyleSheet} from 'react-native';
import {AppConstants, ColorConstants} from '../../library/constants';
import DimensionsValue from '../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: ColorConstants.APP_BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: ColorConstants.APP_BACKGROUND_COLOR,
    padding: 16,
    marginTop: DimensionsValue.VALUE_16,
  },
  viewProductImage: {
    width: '100%',
    height: DimensionsValue.VALUE_200,
    alignItems: 'center',
    borderRadius: DimensionsValue.VALUE_10,
  },
  productImage: {
    width: DimensionsValue.VALUE_180,
    height: DimensionsValue.VALUE_180,
    marginTop: DimensionsValue.VALUE_20,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: DimensionsValue.VALUE_20,
    fontWeight: 'bold',
    marginTop: DimensionsValue.VALUE_20,
  },
  productDescription: {
    marginTop: DimensionsValue.VALUE_10,
  },
  productPrice: {
    fontSize: DimensionsValue.VALUE_18,
    fontWeight: 'bold',
    marginTop: DimensionsValue.VALUE_10,
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: '#3f51b5',
    paddingHorizontal: DimensionsValue.VALUE_16,
    paddingVertical: DimensionsValue.VALUE_10,
    borderRadius: 4,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: DimensionsValue.VALUE_16,
  },
  btnContainer: {
    backgroundColor: ColorConstants.LIGHT_RED,
    marginTop: DimensionsValue.VALUE_20,
    width: '100%',
  },
  textSave: {
    fontSize: DimensionsValue.VALUE_18,
    color: ColorConstants.WHITE,
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
    textTransform: 'capitalize',
  },
});

export default styles;
