import React, {useState, useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {
  AppConstants,
  ColorConstants,
  StringConstants,
} from '../../library/constants';
import {Header} from '../../library/components';
import Images from '../../library/resources/images';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const FavoriteScreen: React.FC<Props> = ({navigation}) => {
  const isFocused = useIsFocused();
  const [favouriteData, setFavoriteData] = useState([]);
  const [trendingData, setTrendingData] = useState(
    AppConstants.TRENDING_DATA_OPTION,
  );
  const [cartData, setCartData] = useState<any>([]);
  const numColumns = 2;

  useEffect(() => {
    loadFavouriteData();
  }, [isFocused]);

  //----Get Favourite Data from Asyncstorage----//
  const loadFavouriteData = async () => {
    try {
      const dataString = await AsyncStorage.getItem('favouriteData');
      if (dataString !== null) {
        const data = JSON.parse(dataString);
        // const favorites = data.filter((item: any) => item.isFavorite);

        // setFavoriteData(favorites);
        const favorites = data.filter((item: any) => item.isFavorite);

        setFavoriteData(favorites);

        // Filter and set the product data to exclude items with isFavorite set to false
        // const filteredData = data.filter((item: any) => item.isFavorite);
        // setFavoriteData(filteredData);
      }
    } catch (error) {
      console.log('Error loading data: ', error);
    }
  };

  //----functions for add item in cart----//

  const addToCart = (item: any) => {
    const newItem = item;
    // Add the new item to the existing cartData array
    const updatedCartData = [...cartData, item];

    // Save the updated cartData to AsyncStorage
    saveCartData(updatedCartData);

    // Update the state with the new cartData
    setCartData(updatedCartData);
  };

  const saveCartData = async (data: any) => {
    try {
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem('cartData', dataString);
      Alert.alert('Item added in cart successfully');
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };

  //----functions for add item in favourite----//
  const addToFavorites = async (itemId: any) => {
    const updatedProductData = trendingData.map(item => {
      if (item.id === itemId) {
        item.isFavorite = true;
        Alert.alert('Item successfully added in favourite');
      }
      return item;
    });

    saveFavouriteData(updatedProductData);
    setTrendingData(updatedProductData);
  };

  const removeFromFavorites = async (itemId: any) => {
    const updatedProductData = trendingData.map(item => {
      if (item.id === itemId) {
        item.isFavorite = false;
        Alert.alert('Item successfully removed from favourite');
      }
      setTimeout(() => {
        loadFavouriteData();
      }, 1000);
      return item;
    });

    saveFavouriteData(updatedProductData);
    setTrendingData(updatedProductData);
  };

  const saveFavouriteData = async (data: any) => {
    try {
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem('favouriteData', dataString);
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };

  const renderFavoriteItem = ({item, index}: any) => (
    <TouchableOpacity
      style={[styles.itemTrendingContainer, {backgroundColor: item.bgColor}]}>
      <TouchableOpacity
        onPress={() => {
          item.isFavorite == true
            ? removeFromFavorites(item.id)
            : addToFavorites(item.id);
        }}
        style={styles.tocuhAddToFab}>
        <Image
          source={Images.IC_FAVOURITE}
          style={[
            styles.imageAddToFab,
            {
              tintColor:
                item.isFavorite == true
                  ? ColorConstants.LIGHT_RED
                  : ColorConstants.A666666,
            },
          ]}
        />
      </TouchableOpacity>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.imageAdd}>
        <Image source={Images.IC_ADD} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={Images.IC_MENU}
        rightIcon={Images.IC_USER_IMAGE}
        title={StringConstants.FAVOURITE}
        tapOnLeftIcon={() => navigation.openDrawer()}
      />

      <View style={styles.viewCategoryData}>
        {favouriteData.length > 0 ? (
          <FlatList
            data={favouriteData}
            keyExtractor={(item: any) => item.id.toString()}
            numColumns={numColumns}
            renderItem={renderFavoriteItem}
          />
        ) : (
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>{StringConstants.NO_DATA_AVAILABLE}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
