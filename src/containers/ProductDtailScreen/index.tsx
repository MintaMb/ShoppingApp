import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';
import styles from './styles';
import {Button, Header} from '../../library/components';
import images from '../../library/resources/images';
import {ScreenConstants, StringConstants} from '../../library/constants';
import UserHome from '../HomeScreen/components/UserHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import DimensionsValue from '../../library/utils/DimensionsValue';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const ProductDetailScreen: FC<Props> = Props => {
  // const { userInfo } = useSelector((state: RootState) => state.userData)
  console.log('props', Props.route.params?.item);
  const isFocused = useIsFocused();
  const [cartData, setCartData] = useState<any>([]);
  const [myOrderData, setMyOrderData] = useState<any>([]);
  let itemData = Props.route.params?.item ? Props.route.params?.item : {};

  useEffect(() => {
    // AsyncStorage.clear();
    loadCartData();
  }, [isFocused]);

  //----For Get Cart Data----//
  const loadCartData = async () => {
    try {
      const dataString = await AsyncStorage.getItem('cartData');
      if (dataString !== null) {
        const data = JSON.parse(dataString);
        setCartData(data);
      }
      const orderString = await AsyncStorage.getItem('myOrders');
      if (orderString !== null) {
        const orderData = JSON.parse(orderString);
        setMyOrderData(orderData);
      }
    } catch (error) {
      console.log('Error loading data: ', error);
    }
  };

  console.log('cart', cartData);

  //----For Placed Order----//
  const addToMyOrders = async () => {
    // const updatedCartData = [itemData];
    try {
      const updatedCartData = [...myOrderData, itemData];
      // let data = JSON.stringify(updatedCartData)
      // Save the updated orders array to AsyncStorage
      await AsyncStorage.setItem('myOrders', JSON.stringify(updatedCartData));
      Alert.alert('Order placed successfully');
      Props.navigation.goBack();
    } catch (error) {
      console.log('Error adding item to My Orders: ', error);
    }
  };

  //----functions for add item in cart----//

  const addToCart = () => {
    // const newItem = item;
    const newItem = itemData;
    const isItemExist = cartData.some(
      (cartItem: any) => cartItem.id === newItem.id,
    );

    if (isItemExist) {
      Alert.alert('Item Already Exists', 'The item is already in the cart.');
      return;
    }
    // Add the new item to the existing cartData array
    const updatedCartData = [...cartData, itemData];
    console.log('update', updatedCartData);

    // Save the updated cartData to AsyncStorage
    saveCartData(updatedCartData);

    // Update the state with the new cartData
    setCartData(updatedCartData);
  };

  const saveCartData = async (data: any) => {
    console.log('home screen', data);

    try {
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem('cartData', dataString);
      Alert.alert('Item added in cart successfully');
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header
        leftIcon={images.IC_BACK}
        rightIcon={images.IC_USER_IMAGE}
        title={StringConstants.PRODUCT_DETAIL}
        tapOnLeftIcon={() => Props.navigation.goBack()}
      />
      <View style={styles.container}>
        <View
          style={[
            styles.viewProductImage,
            {backgroundColor: itemData.bgColor},
          ]}>
          <Image source={itemData.image} style={styles.productImage} />
        </View>
        <Text style={styles.productTitle}>{itemData.title}</Text>
        <Text style={styles.productDescription}>
          {itemData.productDescription}
        </Text>
        <Text style={styles.productPrice}>${itemData.price}</Text>

        <Button
          textStyle={styles.textSave}
          containerStyle={styles.btnContainer}
          title={'Add to cart'}
          isLoading={false}
          onPress={() => addToCart()}
        />
        <Button
          textStyle={styles.textSave}
          containerStyle={styles.btnContainer}
          title={'Buy Now'}
          isLoading={false}
          onPress={() => addToMyOrders()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
