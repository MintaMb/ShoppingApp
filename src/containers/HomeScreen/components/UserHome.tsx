import React, {FC, useState, useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import Images from '../../../library/resources/images';
import DimensionsValue from '../../../library/utils/DimensionsValue';
import {
  AppConstants,
  ColorConstants,
  StringConstants,
} from '../../../library/constants';
import {useIsFocused} from '@react-navigation/native';
import ImageButton from '../../../library/components/ImageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating-widget';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

const numColumns = 2;

const UserHome: FC<Props> = ({navigation}) => {
  const isFocused = useIsFocused();
  const [carouselData, setCarouselData] = useState(AppConstants.CAROUSEL_DATA);
  const [trendingData, setTrendingData] = useState(
    AppConstants.TRENDING_DATA_OPTION,
  );
  const [cartData, setCartData] = useState<any>([]);
  const [rating, setRating] = useState(0);
  const categoryData = AppConstants.CATEGORT_OPTIONS_DATA;

  const navigtaeToProductDetailScreen = ({item, index}: any) => {
    navigation.navigate('ProductDetailScreen', {item});
  };

  useEffect(() => {
    loadFavouriteData();
  }, [isFocused]);

  //----functions for add item in cart----//

  const addToCart = (item: any) => {
    const newItem = item;
    const isItemExist = cartData.some(
      (cartItem: any) => cartItem.id === newItem.id,
    );

    if (isItemExist) {
      Alert.alert('Item Already Exists', 'The item is already in the cart.');
      return;
    }
    // Add the new item to the existing cartData array
    const updatedCartData = [...cartData, item];

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

  //----functions for add item in favourite----//
  const addToFavorites = async (itemId: any) => {
    const updatedProductData = trendingData.map(item => {
      if (item.id === itemId) {
        item.isFavorite = true;
        Alert.alert('Item added successfully in favourite');
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
        Alert.alert('Item successfully removed in favourite');
      }
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

  const loadFavouriteData = async () => {
    try {
      const dataString = await AsyncStorage.getItem('favouriteData');
      if (dataString !== null) {
        const data = JSON.parse(dataString);
        // const favorites = data.filter((item: any) => item.isFavorite);

        // setFavoriteData(favorites);
        const favorites = data.filter((item: any) => item.isFavorite);

        setCartData(favorites);

        // Filter and set the product data to exclude items with isFavorite set to false
        const filteredData = data.filter((item: any) => item.isFavorite);
        setCartData(filteredData);
      }
    } catch (error) {
      console.log('Error loading data: ', error);
    }
  };

  const carouselRenderItem = ({item}: any) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: DimensionsValue.VALUE_200,
            width: DimensionsValue.VALUE_345,
            resizeMode: 'cover',
            borderRadius: DimensionsValue.VALUE_20,
          }}
        />
      </View>
    );
  };

  const categoryRenderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('still to implement')}
        style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigtaeToProductDetailScreen({item, index})}
        style={[styles.itemTrendingContainer, {backgroundColor: item.bgColor}]}>
        <TouchableOpacity
          style={styles.tocuhAddToFab}
          onPress={() => {
            item.isFavorite == true
              ? removeFromFavorites(item.id)
              : addToFavorites(item.id);
          }}>
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
        <Text style={styles.itemPrice}>${item.price}</Text>
        {/* <StarRating rating={rating} onChange={setRating} /> */}
        <TouchableOpacity
          style={styles.imageAdd}
          onPress={() => addToCart(item)}>
          <Image source={Images.IC_ADD} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.innerContainer}>
      <View style={styles.viewCarousel}>
        <Carousel
          autoplay={true}
          loop
          autoplayDelay={1000}
          data={carouselData}
          renderItem={carouselRenderItem}
          sliderWidth={DimensionsValue.VALUE_345}
          itemWidth={500}
        />
      </View>
      <View style={styles.viewCategoryData}>
        <FlatList
          data={categoryData}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={categoryRenderItem}
        />
      </View>
      <View style={styles.viewPopular}>
        <Text style={styles.textPopular}>Trending</Text>
        <ImageButton
          onPress={() => Alert.alert('still to implement')}
          title={StringConstants.VIEW_ALL}
          titleStyle={styles.textViewAll}
        />
      </View>
      <View style={[styles.container, {flex: 1, width: '100%'}]}>
        <FlatList
          data={trendingData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default UserHome;
