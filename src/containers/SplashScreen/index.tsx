import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, SafeAreaView, Text} from 'react-native';
import styles from './styles';

import Images from '../../library/resources/images';
import {ScreenConstants, StringConstants} from '../../library/constants';
import {CommonActions} from '@react-navigation/native';

type Props = NativeStackScreenProps<any>;

const SplashScreen: React.FC<Props> = ({navigation}) => {
  // const dispatch = useDispatch()

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    setTimeout(() => {
      navigateToScreen(ScreenConstants.DRAWER_STACK);
    }, 2000);
  };

  //---- CLEAR STACK AND REDIRECT USER TO ANOTHER SCREEN ----//
  const navigateToScreen = (name: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name}],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.IC_LOGO} style={styles.imageLogo} />
      <Text style={styles.textAppName}>
        {StringConstants.LETS_GO_FOR_SHOPPING}
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
