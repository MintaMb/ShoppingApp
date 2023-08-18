import images from '../resources/images';
import ScreenConstants from './ScreenConstants';
import StringConstants from './StringConstants';

export default {
  TOKEN: 'token',
  USER_INFO: 'userInfo',

  CUSTOMER_BOTTOM_STACK: [
    {image: images.IC_HOME, screenName: ScreenConstants.HOME_SCREEN},
    {image: images.IC_FAVOURITE, screenName: ScreenConstants.FAVOURITE_SCREEN},
    {
      image: images.IC_CART,
      screenName: ScreenConstants.CART_SCREEN,
    },
    {
      image: images.IC_BOX,
      screenName: ScreenConstants.MY_ORDER_SCREEN,
    },
    {
      image: images.IC_USER,
      screenName: ScreenConstants.MY_PROFILE_SCREEN,
    },
  ],

  CAROUSEL_DATA: [
    {
      image: {
        uri: 'https://www.dealsfreak.com/wp-content/uploads/2018/01/nike-shoes-new-50-off.jpg',
      },
    },
    {
      image: {
        uri: 'https://cdn.zouton.com/images/originals/blog/banner1_1596189937.jpg',
      },
    },
    {
      image: {
        uri: 'https://images.milledcdn.com/2020-06-11/41t5G9pIxltsO9kO/TK6_-U-Ron8Z.jpg',
      },
    },
  ],

  CATEGORT_OPTIONS_DATA: [
    {
      id: 1,
      title: 'All',
      image: images.IC_CATEGORIES,
    },
    {
      id: 2,
      title: 'FootWear',
      image: {
        uri: 'https://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-12.png',
      },
    },
    {
      id: 3,
      title: 'Watches',
      image: {
        uri: 'https://data1.ibtimes.co.in/en/full/679087/xiaomi-amazfit-bip-smartwatch.png',
      },
    },
    {
      id: 4,
      title: 'Men',
      image: {
        uri: 'https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-black-shirt-png-transparent-image-pngpix-2.png',
      },
    },
    {
      id: 5,
      title: 'Women',
      image: {
        uri: 'https://cdn1.iconfinder.com/data/icons/tshirt-forms/154/girl-tshirt-512.png',
      },
    },
    // Add more category items as needed
  ],

  TRENDING_DATA_OPTION: [
    // Add your large list of trending products here
    // Each item should have an 'id', 'title', and 'image' property
    // Example:
    {
      id: '1',
      title: 'Converse',
      price: '12.00',
      height: 192,
      bgColor: '#e6ebb9',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png',
      },
    },
    {
      id: '2',
      title: 'Nike Shoes',
      price: '10.00',
      height: 230,
      bgColor: '#f2d7d5',
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      isFavorite: false,
      image: {
        uri: 'https://rocbe.com/wp-content/uploads/2020/04/nike-sports-shoes-46911.png',
      },
    },
    {
      id: '3',
      title: 'Wood Land Shoe',
      price: '10.00',
      height: 192,
      bgColor: '#b9e4eb',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://sslimages.shoppersstop.com/sys-master/images/h69/h31/9336826855454/200231338_9113.png_2000Wx3000H',
      },
    },
    {
      id: '4',
      title: 'Loafer Shoe',
      price: '20.00',
      height: 230,
      bgColor: '#e1d3f0',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dw9866cf90/FJ_79062_01.png?sw=1200&sh=1200&sm=fit&sfrm=png',
      },
    },
    {
      id: '5',
      title: 'Sports Shoe',
      price: '30.00',
      height: 192,
      bgColor: '#f2d7d5',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5812.png',
      },
    },
    {
      id: '6',
      title: 'Converse',
      price: '12.00',
      height: 192,
      bgColor: '#e6ebb9',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png',
      },
    },
    {
      id: '7',
      title: 'Nike Shoes',
      price: '10.00',
      height: 230,
      bgColor: '#f2d7d5',
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      isFavorite: false,
      image: {
        uri: 'https://rocbe.com/wp-content/uploads/2020/04/nike-sports-shoes-46911.png',
      },
    },
    {
      id: '8',
      title: 'Wood Land Shoe',
      price: '10.00',
      height: 192,
      bgColor: '#b9e4eb',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://sslimages.shoppersstop.com/sys-master/images/h69/h31/9336826855454/200231338_9113.png_2000Wx3000H',
      },
    },
    {
      id: '9',
      title: 'Loafer Shoe',
      price: '20.00',
      height: 230,
      bgColor: '#e1d3f0',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dw9866cf90/FJ_79062_01.png?sw=1200&sh=1200&sm=fit&sfrm=png',
      },
    },
    {
      id: '10',
      title: 'Sports Shoe',
      price: '30.00',
      height: 192,
      bgColor: '#f2d7d5',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5812.png',
      },
    },
    {
      id: '11',
      title: 'Converse',
      price: '12.00',
      height: 192,
      bgColor: '#e6ebb9',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png',
      },
    },
    {
      id: '12',
      title: 'Nike Shoes',
      price: '10.00',
      height: 230,
      bgColor: '#f2d7d5',
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      isFavorite: false,
      image: {
        uri: 'https://rocbe.com/wp-content/uploads/2020/04/nike-sports-shoes-46911.png',
      },
    },
    {
      id: '13',
      title: 'Wood Land Shoe',
      price: '10.00',
      height: 192,
      bgColor: '#b9e4eb',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://sslimages.shoppersstop.com/sys-master/images/h69/h31/9336826855454/200231338_9113.png_2000Wx3000H',
      },
    },
    {
      id: '14',
      title: 'Loafer Shoe',
      price: '20.00',
      height: 230,
      bgColor: '#e1d3f0',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dw9866cf90/FJ_79062_01.png?sw=1200&sh=1200&sm=fit&sfrm=png',
      },
    },
    {
      id: '15',
      title: 'Sports Shoe',
      price: '30.00',
      height: 192,
      bgColor: '#f2d7d5',
      isFavorite: false,
      productDescription:
        'An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe.',
      image: {
        uri: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5812.png',
      },
    },
    // Add more products as needed
  ],

  HITSLOP_SMALL: {
    top: 20,
    left: 10,
    bottom: 10,
    right: 10,
  },

  //----FontFamily----//
  FONT_OUTFIT_REGULAR: 'OutfitRegular',
  FONT_OUTFIT_MEDIUM: 'OutfitMedium',
  FONT_OUTFIT_SEMI_BOLD: 'OutfitSemiBold',
  FONT_OUTFIT_BOLD: 'OutfitBold',
  FONT_OUTFIT_EXTRA_BOLD: 'OutfitExtraBold',
  FONT_OUTFIT_EXTRA_LIGHT: 'OutfitExtraLight',
  FONT_OUTFIT_LIGHT: 'OutfitLight',
  FONT_OUTFIT_THIN: 'OutfitThin',
  FONT_OUTFIT_BLACK: 'OutfitBlack',

  DRAWER_USER_ITEMS: [
    {title: StringConstants.HOME, icon: images.IC_HOME},
    {title: StringConstants.MY_PROFILE, icon: images.IC_USER},
    // {title: StringConstants.CHANGE_PASSWORD, icon: images.IC_CHANGE_PASSWORD},
    // {title: StringConstants.LOGOUT, icon: images.IC_LOGOUT},
  ],

  //validations
  EMAIL: 'EMAIL',
  REQUIRED: 'REQUIRED',
  DATE_REQUIRED: 'DATEREQUIRED',
  IMAGE_REQUIRED: 'IMAGE_REQUIRED',
  NUMBER: 'NUMBER',
  NUMBERLENGTH: 'NUMBERLENGTH',
  NUMBERLENGTH_6: 'NUMBERLENGTH_6',
  PHONENUMBER: 'PHONENUMBER',
  FLOAT_NUMBER: 'FLOAT_NUMBER',
  USERNAME: 'USERNAME',
  ISNOTNULL: 'ISNOTNULL',
  PASSWORD: 'PASSWORD',
};
