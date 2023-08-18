import React, {FC, useEffect, useState} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import styles from './styles';
import {Header} from '../../library/components';
import images from '../../library/resources/images';
import {ColorConstants, StringConstants} from '../../library/constants';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DimensionsValue from '../../library/utils/DimensionsValue';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const CartScreen: FC<Props> = Props => {
  // const { userInfo } = useSelector((state: RootState) => state.userData)
  const isFocused = useIsFocused();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    loadCartData();
  }, [isFocused]);

  const loadCartData = async () => {
    try {
      const dataString = await AsyncStorage.getItem('cartData');
      if (dataString !== null) {
        const data = JSON.parse(dataString);

        setCartData(data);
      }
    } catch (error) {
      console.log('Error loading data: ', error);
    }
  };

  const tapOnBuy = async (item: any) => {
    try {
      // Get the existing orders from AsyncStorage
      const ordersString = await AsyncStorage.getItem('myOrders');
      let orders = [];
      if (ordersString !== null) {
        orders = JSON.parse(ordersString);
      }

      // Add the new item to the orders array
      orders.push(item);

      // Save the updated orders array to AsyncStorage
      await AsyncStorage.setItem('myOrders', JSON.stringify(orders));
      Alert.alert('Order placed successfully');
      removeFromCart(item.id);
    } catch (error) {
      console.log('Error adding item to My Orders: ', error);
    }
  };

  const CartItem = ({item, onRemoveItem, onBuyNow}: any) => {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={item.image} style={styles.cartItemImage} />
        <View style={styles.cartItemDetails}>
          <Text style={styles.cartItemTitle}>{item.title}</Text>
          <Text style={styles.cartItemPrice}>${item.price}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => onRemoveItem(item.id)}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.removeButton, {marginTop: DimensionsValue.VALUE_10}]}
            onPress={() => onBuyNow(item)}>
            <Text style={styles.removeButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const saveCartData = async (data: any) => {
    try {
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem('cartData', dataString);
      Alert.alert('Item removed successfully');
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };
  const removeFromCart = async (itemId: any) => {
    // Remove the item from the cartData array
    const updatedCartData = cartData.filter((item: any) => item.id !== itemId);
    // Save the updated cartData to AsyncStorage
    saveCartData(updatedCartData);
    // Update the state with the new cartData
    setCartData(updatedCartData);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header
        leftIcon={images.IC_MENU}
        rightIcon={images.IC_USER_IMAGE}
        title={StringConstants.CART}
        tapOnLeftIcon={() => Props.navigation.openDrawer()}
      />
      {cartData.length > 0 ? (
        <View>
          <FlatList
            data={cartData}
            extraData={cartData}
            renderItem={({item}) => (
              <CartItem
                item={item}
                onBuyNow={tapOnBuy}
                onRemoveItem={removeFromCart}
              />
            )}
            keyExtractor={(item: any) => item.id.toString()}
          />
        </View>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text
            style={{
              fontSize: DimensionsValue.VALUE_18,
              color: ColorConstants.BLACK,
            }}>
            {StringConstants.NO_DATA_AVAILABLE}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
