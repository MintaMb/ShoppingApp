import React, {FC, ReactElement, useState} from 'react';
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
import {Source} from 'react-native-fast-image';
import {ColorConstants} from '../constants';
import images from '../resources/images';
import DimensionsValue from '../utils/DimensionsValue';
import ImageButton from './ImageButton';
// import ImageViewModal from './ImageViewModal';

type Props = {
  source: ImageSourcePropType & Source;
  onPressDelete?: () => void;
  showDeleteIcon: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const ImageViewItem: FC<Props> = ({
  source,
  onPressDelete,
  showDeleteIcon,
  containerStyle,
}) => {
  const [showModal, setSHowModal] = useState(false);

  const hideModal = () => {
    setSHowModal(false);
  };

  const handleViewImage = () => {
    setSHowModal(true);
  };

  return (
    <View style={[styles.viewContainer, containerStyle]}>
      <Image source={source} style={styles.imageStyle} />
      <ImageButton
        onPress={handleViewImage}
        containerStyle={styles.eyeContainer}
        imageStyle={styles.imageEye}
        // image={images.IC_EYE_OUTLINE}
      />
      {showDeleteIcon && (
        <TouchableOpacity onPress={onPressDelete} style={styles.touchDelete}>
          {/* <Image source={images.IC_DELETE} style={styles.imageDelete} /> */}
        </TouchableOpacity>
      )}
      {/* {showModal && (
        <ImageViewModal
          uri={source}
          hideModal={hideModal}
          fallbackSource={source}
        />
      )} */}
    </View>
  );
};

export default ImageViewItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: DimensionsValue.VALUE_60,
    height: DimensionsValue.VALUE_60,
    borderRadius: DimensionsValue.VALUE_10,
  },
  viewImage: {
    overflow: 'hidden',
    borderRadius: DimensionsValue.VALUE_10,
  },
  viewContainer: {
    flexDirection: 'row',
    backgroundColor: ColorConstants.TRANSPARENT,
    marginRight: DimensionsValue.VALUE_28,
    justifyContent: 'space-between',
    marginBottom: DimensionsValue.VALUE_7,
  },
  imageDelete: {
    width: DimensionsValue.VALUE_24,
    height: DimensionsValue.VALUE_24,
  },
  eyeContainer: {
    position: 'absolute',
    backgroundColor: '#00000050',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    borderRadius: DimensionsValue.VALUE_10,
    alignItems: 'center',
  },
  imageEye: {
    width: DimensionsValue.VALUE_18,
    height: DimensionsValue.VALUE_18,
  },
  touchDelete: {
    position: 'absolute',
    right: -DimensionsValue.VALUE_10,
    top: -DimensionsValue.VALUE_10,
  },
});
