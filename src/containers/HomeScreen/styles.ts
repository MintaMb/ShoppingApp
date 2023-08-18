import {StyleSheet} from 'react-native';
import {AppConstants, ColorConstants} from '../../library/constants';
import DimensionsValue from '../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.APP_BACKGROUND_COLOR,
  },
  headerCartContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: ColorConstants.WHITE,
    height: DimensionsValue.VALUE_35,
    width: DimensionsValue.VALUE_35,
    marginEnd: -DimensionsValue.VALUE_60,
    borderRadius: DimensionsValue.VALUE_40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  headerCartImage: {
    width: DimensionsValue.VALUE_15,
    height: DimensionsValue.VALUE_15,
    alignSelf: 'center',
  },
  containerFilter: {
    backgroundColor: ColorConstants.LIGHT_RED,
    height: DimensionsValue.VALUE_40,
    width: DimensionsValue.VALUE_40,
    borderRadius: DimensionsValue.VALUE_10,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: DimensionsValue.VALUE_15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  imageFilter: {
    height: DimensionsValue.VALUE_20,
    width: DimensionsValue.VALUE_20,
  },
  emailTextInputStyle: {
    width: '100%',
  },
  emailTextInputContainer: {
    marginTop: DimensionsValue.VALUE_30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  passTextInputContainer: {
    // marginTop: DimensionsValue.VALUE_15,
  },
  showHidePass: {
    position: 'absolute',
    end: 5,
    height: DimensionsValue.VALUE_40,
    width: DimensionsValue.VALUE_40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSearchInput: {
    flexDirection: 'row',
    marginHorizontal: DimensionsValue.VALUE_10,
    marginVertical: DimensionsValue.VALUE_20,
    justifyContent: 'center',
    alignItems: 'center',
    height: DimensionsValue.VALUE_40,
  },
  searchInput: {
    marginTop: DimensionsValue.VALUE_15,
    height: DimensionsValue.VALUE_45,
  },
});

export default styles;
