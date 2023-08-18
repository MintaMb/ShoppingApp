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
    paddingHorizontal: DimensionsValue.VALUE_16,
    flex: 1,
  },
  viewCategoryData: {
    flex: 1,
    marginStart: DimensionsValue.VALUE_20,
  },
  itemTrendingContainer: {
    marginRight: DimensionsValue.VALUE_20,
    width: DimensionsValue.VALUE_160,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DimensionsValue.VALUE_20,
    backgroundColor: 'red',
    borderRadius: DimensionsValue.VALUE_10,
  },
  tocuhAddToFab: {
    alignSelf: 'flex-end',
    marginTop: DimensionsValue.VALUE_10,
    marginEnd: DimensionsValue.VALUE_10,
  },
  imageAddToFab: {
    tintColor: 'white',
  },

  itemImage: {
    width: DimensionsValue.VALUE_120,
    height: DimensionsValue.VALUE_120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  itemTitle: {
    marginTop: 8,
    alignSelf: 'flex-start',
    marginStart: DimensionsValue.VALUE_10,
  },
  itemPrice: {
    marginTop: 8,
    alignSelf: 'flex-start',
    marginStart: DimensionsValue.VALUE_10,
    fontWeight: 'bold',
  },

  imageAdd: {
    marginBottom: DimensionsValue.VALUE_10,
    marginEnd: DimensionsValue.VALUE_10,
    alignSelf: 'flex-end',
  },

  textAddData: {
    fontSize: DimensionsValue.VALUE_30,
    marginTop: DimensionsValue.VALUE_20,
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: DimensionsValue.VALUE_30,
    marginTop: 'auto',
  },
  title: {
    fontSize: DimensionsValue.VALUE_20,
    fontWeight: 'bold',
    marginBottom: DimensionsValue.VALUE_16,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: DimensionsValue.VALUE_16,
  },
  image: {
    width: DimensionsValue.VALUE_150,
    height: DimensionsValue.VALUE_150,
    borderRadius: 8,
  },
  itemName: {
    fontSize: DimensionsValue.VALUE_16,
    marginTop: 8,
  },
  emptyMessage: {
    fontSize: DimensionsValue.VALUE_16,
    alignSelf: 'center',
    marginTop: DimensionsValue.VALUE_16,
  },
});

export default styles;
