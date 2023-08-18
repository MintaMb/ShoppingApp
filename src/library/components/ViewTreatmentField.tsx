import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {AppConstants, ColorConstants} from '../constants';
import DimensionsValue from '../utils/DimensionsValue';

type Props = {
  text: string;
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  customLineViewStyle?: StyleProp<ViewStyle>;
};

const ViewTreatmentField: React.FC<Props> = ({
  text,
  title,
  containerStyle,
  customLineViewStyle,
}) => {
  return (
    <View style={[styles.rootContainer, containerStyle]}>
      <View style={[styles.lineView, customLineViewStyle]}>
        <Text style={styles.Heading}>{title}</Text>
        <Text style={styles.subHeading}>{text}</Text>
      </View>
    </View>
  );
};

export default ViewTreatmentField;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: DimensionsValue.VALUE_10,
    width: '100%',
    // flex: 1,
    overflow: 'hidden',
  },
  Heading: {
    color: ColorConstants.BLACK,
    fontFamily: AppConstants.FONT_OUTFIT_MEDIUM,
    fontSize: DimensionsValue.VALUE_14,
  },
  subHeading: {
    fontSize: DimensionsValue.VALUE_12,
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    marginTop: DimensionsValue.VALUE_5,
    color: ColorConstants.TAB_ITEM,
  },
  lineView: {
    borderStyle: 'dashed',
    borderWidth: 1.3,
    borderColor: ColorConstants.COLOR_DAECF7,
    margin: -2,
    marginBottom: 0,
    paddingBottom: DimensionsValue.VALUE_10,
  },
});
