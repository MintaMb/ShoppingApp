import React, { Component, PureComponent, ReactNode } from 'react';
import {
  View, TextInput, Dimensions, Text, Platform, StyleSheet, StyleProp, ViewStyle, KeyboardTypeOptions, ReturnKeyTypeOptions,
  TextStyle, TextInputProps, PlatformIOSStatic
} from 'react-native';
import { AppConstants, ColorConstants } from '../constants';
import DimensionsValue from '../utils/DimensionsValue';

const { width } = Dimensions.get('window');
const { isPad } = Platform as PlatformIOSStatic

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>,
  customStyles?: StyleProp<ViewStyle>,
  customTextInputStyles?: StyleProp<TextStyle>,
  multiline?: boolean,
  secureTextEntry?: boolean,
  isMandatory?: boolean,
  hint?: string,
  title?: string,
  titleStyle?: StyleProp<TextStyle>,
  editable?: boolean,
  isPassword?: boolean,
  ExtraLabelText?: string,
  renderExtraItem?: () => ReactNode,
  customViewStyle?: StyleProp<ViewStyle>,
  rightChildren?: ReactNode,
  err?: string,
}


export default class TextInputField extends PureComponent<Props> {


  render() {
    const { containerStyle, keyboardType, customStyles, multiline, isMandatory, secureTextEntry,
      hint, title, titleStyle, editable, isPassword, customTextInputStyles, err,
      ExtraLabelText, renderExtraItem, customViewStyle, ...props } = this.props;


    return (
      <View style={[styles.viewTextInput, containerStyle]}>
        {/* <View style={{ flexDirection: 'row',backgroundColor:'red' }}> */}
        {title && <Text style={[styles.textLabel, titleStyle]}>
          {title}
          {isMandatory && <Text style={{ color: ColorConstants.RED }}> *</Text>}
          {ExtraLabelText && <Text style={{ color: ColorConstants.TAB_ITEM }}>{" "}{ExtraLabelText}</Text>}
        </Text>}
        {renderExtraItem && renderExtraItem()}
        {/* </View> */}

        <View style={[styles.innerView, customStyles]}>
          <TextInput
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            editable={editable}
            style={[styles.textInput, editable == false && { color: ColorConstants.TAB_ITEM }, customTextInputStyles]}
            placeholder={hint}
            placeholderTextColor={ColorConstants.COLOR_CCCCCC}
            {...props}
          />
          {this.props.rightChildren}
        </View>
        <Text style={styles.textError}>{err || ' '}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewTextInput: {
    alignSelf: 'center',
    // marginVertical: DimensionsValue.VALUE_12
  },
  innerView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: isPad ? width - DimensionsValue.VALUE_130 : DimensionsValue.VALUE_295,
    height: isPad ? width / 12 : DimensionsValue.VALUE_45,
    paddingStart: width / 25,
    paddingEnd: width / 25,
    backgroundColor: ColorConstants.WHITE,
    borderRadius:DimensionsValue.VALUE_10,
  },
  textInput: {
    fontSize: DimensionsValue.VALUE_14,
    color: ColorConstants.BLACK,
    flex: 1,
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
  },
  textLabel: {
    color: ColorConstants.BLACK_LIGHT,
    fontSize: DimensionsValue.VALUE_14,
    alignSelf: 'flex-start',
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    marginBottom: 5,
  },
  textError: {
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    color: ColorConstants.RED_LIGHT,
    fontSize: DimensionsValue.VALUE_12,
    marginTop: 3,
    // textAlign: 'right'
  }
})