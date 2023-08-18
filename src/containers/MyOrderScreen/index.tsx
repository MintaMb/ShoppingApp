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
import {StringConstants} from '../../library/constants';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const CartScreen: FC<Props> = Props => {
  // const { userInfo } = useSelector((state: RootState) => state.userData)
  const isFocused = useIsFocused();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    getMyOrders();
  }, [isFocused]);

  const getMyOrders = async () => {
    try {
      const ordersString = await AsyncStorage.getItem('myOrders');
      if (ordersString !== null) {
        const orders = JSON.parse(ordersString);
        // Set the retrieved orders to the state or use it as needed
        setMyOrders(orders);
      }
    } catch (error) {
      console.log('Error getting My Orders: ', error);
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
      </View>
    );
  };

  console.log('orderData', myOrders);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header
        leftIcon={images.IC_MENU}
        rightIcon={images.IC_USER_IMAGE}
        title={StringConstants.MY_ORDER}
        tapOnLeftIcon={() => Props.navigation.openDrawer()}
      />
      {myOrders.length > 0 ? (
        <View>
          <FlatList
            data={myOrders}
            extraData={myOrders}
            renderItem={({item}) => <CartItem item={item} />}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>{StringConstants.NO_DATA_AVAILABLE}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
