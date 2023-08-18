import {StyleSheet} from 'react-native';
import {AppConstants, ColorConstants} from '../../../library/constants';
import DimensionsValue from '../../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.APP_BACKGROUND_COLOR,
  },
  innerContainer: {
    paddingHorizontal: DimensionsValue.VALUE_16,
    flex: 1,
  },

  //----categoryItem Styles----//
  itemContainer: {
    marginRight: DimensionsValue.VALUE_10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: ColorConstants.WHITE,
    maxHeight: DimensionsValue.VALUE_40,
    minWidth: DimensionsValue.VALUE_60,
    paddingHorizontal: DimensionsValue.VALUE_10,
    // padding: 20,
    flex: 1,
    borderRadius: DimensionsValue.VALUE_10,
  },
  image: {
    width: DimensionsValue.VALUE_20,
    height: DimensionsValue.VALUE_20,
    marginRight: 5,
  },
  title: {
    fontSize: DimensionsValue.VALUE_12,
    color: ColorConstants.A666666,
    textAlign: 'left',
  },
  viewCarousel: {
    height: DimensionsValue.VALUE_230,
  },
  viewCategoryData: {
    height: DimensionsValue.VALUE_60,
  },
  viewPopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPopular: {
    color: ColorConstants.BLACK_DRAK,
  },
  textViewAll: {
    color: ColorConstants.A666666,
  },
  heading: {
    fontSize: DimensionsValue.VALUE_20,
    fontWeight: 'bold',
    marginBottom: DimensionsValue.VALUE_10,
  },
  itemTrendingContainer: {
    marginRight: DimensionsValue.VALUE_20,
    width: DimensionsValue.VALUE_160,
    // flex: 1,
    // height: DimensionsValue.VALUE_185,
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
    // fontSize: 20,
  },

  imageAdd: {
    // marginStart: DimensionsValue.VALUE_120,
    marginBottom: DimensionsValue.VALUE_10,
    marginEnd: DimensionsValue.VALUE_10,
    alignSelf: 'flex-end',
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
