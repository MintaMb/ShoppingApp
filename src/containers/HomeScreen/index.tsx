import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions, Image, SafeAreaView, Alert, View, Text} from 'react-native';
import styles from './styles';
import {Header, ImageButton, TextInputField} from '../../library/components';
import images from '../../library/resources/images';
import {
  ColorConstants,
  ScreenConstants,
  StringConstants,
} from '../../library/constants';
import UserHome from './components/UserHome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DimensionsValue from '../../library/utils/DimensionsValue';
import {Screen} from 'react-native-screens';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const HomeScreen: FC<Props> = Props => {
  // const { userInfo } = useSelector((state: RootState) => state.userData)
  const [isSearch, setIsSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerStyle={{marginBottom: DimensionsValue.VALUE_10}}
        leftIcon={images.IC_MENU}
        rightIcon={images.IC_USER_IMAGE}
        title={StringConstants.HOME}
        childern={
          <ImageButton
            onPress={() =>
              Props.navigation.navigate(ScreenConstants.CART_SCREEN)
            }
            image={images.IC_CART}
            containerStyle={styles.headerCartContainer}
            imageStyle={styles.headerCartImage}
          />
        }
        tapOnLeftIcon={() => Props.navigation.openDrawer()}
      />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: DimensionsValue.VALUE_40,
        }}>
        <View style={styles.viewSearchInput}>
          <TextInputField
            customStyles={styles.searchInput}
            placeholder={StringConstants.SEARCH}
            value={isSearch}
            onChangeText={text => setIsSearch(text)}
            rightChildren={
              <ImageButton
                onPress={() => setIsSearch('')}
                containerStyle={styles.showHidePass}
                image={isSearch ? images.IC_CLOSE : images.IC_SEARCH}
              />
            }
          />
          <ImageButton
            onPress={() => 'filter'}
            containerStyle={styles.containerFilter}
            imageStyle={styles.imageFilter}
            image={images.IC_FILTER}
          />
        </View>
        <UserHome {...Props} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
