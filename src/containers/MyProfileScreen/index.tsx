import React, {useState} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ScreenConstants, StringConstants} from '../../library/constants';
import {
  Header,
  ImageButton,
  ViewTreatmentField,
} from '../../library/components';
import Images from '../../library/resources/images';
import TreatmentForm from '../../library/components/TreatmentForm';
import styles from './styles';
import DimensionsValue from '../../library/utils/DimensionsValue';
import {fieldState} from '../../library/types/addData';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const MyProfileScreen: React.FC<Props> = Props => {
  const [formData, setFormData] = useState<fieldState>();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={Images.IC_MENU}
        rightIcon={Images.IC_USER_IMAGE}
        title={StringConstants.MY_PROFILE}
        tapOnLeftIcon={() => Props.navigation.openDrawer()}
      />
      <View style={styles.innerContainer}>
        <View style={styles.viewProfileImage}>
          <Image
            source={Images.IC_PROFILE_PLACEHOLDER}
            style={styles.imageProfile}
          />
          <ImageButton
            containerStyle={styles.buttonEditProfile}
            titleStyle={styles.textEditProfile}
            title={StringConstants.EDIT_PROFILE}
            onPress={() => Alert.alert('still to implement')}
          />
        </View>

        <ViewTreatmentField
          customLineViewStyle={{borderStyle: 'solid'}}
          containerStyle={{
            marginRight: DimensionsValue.VALUE_20,
            marginTop: DimensionsValue.VALUE_30,
          }}
          title={StringConstants.TITLE_PATIENT_ID}
          text="ABC12345"
        />
        <View
          style={{flexDirection: 'row', marginTop: DimensionsValue.VALUE_15}}>
          <ViewTreatmentField
            customLineViewStyle={{borderStyle: 'solid'}}
            containerStyle={{
              marginRight: DimensionsValue.VALUE_20,
              width: DimensionsValue.VALUE_140,
            }}
            title={StringConstants.TITLE_FIRST_NAME}
            text="Steve"
          />
          <ViewTreatmentField
            customLineViewStyle={{borderStyle: 'solid'}}
            containerStyle={{
              marginRight: DimensionsValue.VALUE_20,
              width: DimensionsValue.VALUE_140,
            }}
            title={StringConstants.TITLE_LAST_NAME}
            text="James"
          />
        </View>
        <ViewTreatmentField
          customLineViewStyle={{borderStyle: 'solid'}}
          containerStyle={{
            marginRight: DimensionsValue.VALUE_20,
            marginTop: DimensionsValue.VALUE_15,
          }}
          title={StringConstants.TITLE_DATE_OF_BIRTH}
          text="26 Oct 1996"
        />
        <ViewTreatmentField
          customLineViewStyle={{borderStyle: 'solid'}}
          containerStyle={{
            marginRight: DimensionsValue.VALUE_20,
            marginTop: DimensionsValue.VALUE_15,
          }}
          title={StringConstants.TITLE_EMAIL}
          text="steve_jam@gmail.com"
        />
        <ViewTreatmentField
          customLineViewStyle={{borderStyle: 'solid'}}
          containerStyle={{
            marginRight: DimensionsValue.VALUE_20,
            marginTop: DimensionsValue.VALUE_15,
          }}
          title={StringConstants.PHONE}
          text="+1 985-852-8529"
        />
        <ViewTreatmentField
          customLineViewStyle={{borderStyle: 'solid'}}
          containerStyle={{
            marginRight: DimensionsValue.VALUE_20,
            marginTop: DimensionsValue.VALUE_15,
          }}
          title={StringConstants.TITLE_ZIP_CODE}
          text="55427"
        />
      </View>
    </SafeAreaView>
  );
};

export default MyProfileScreen;
