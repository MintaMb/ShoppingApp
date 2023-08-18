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
    padding: DimensionsValue.VALUE_16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: DimensionsValue.VALUE_24,
    fontWeight: 'bold',
    marginBottom: DimensionsValue.VALUE_20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: DimensionsValue.VALUE_16,
    backgroundColor: ColorConstants.WHITE,
    marginTop: DimensionsValue.VALUE_20,
    marginHorizontal: DimensionsValue.VALUE_16,
    borderRadius: DimensionsValue.VALUE_10,
  },
  cartItemImage: {
    width: DimensionsValue.VALUE_80,
    height: DimensionsValue.VALUE_80,
    marginRight: DimensionsValue.VALUE_10,
    resizeMode: 'contain',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: DimensionsValue.VALUE_18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: DimensionsValue.VALUE_16,
    color: '#888',
  },
  removeButton: {
    backgroundColor: ColorConstants.LIGHT_RED,
    paddingVertical: 5,
    paddingHorizontal: DimensionsValue.VALUE_10,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: DimensionsValue.VALUE_14,
  },
});

export default styles;
