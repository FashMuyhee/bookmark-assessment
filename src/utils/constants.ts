import {Dimensions, Platform} from 'react-native';

/**
 *  default fonts
 */
export const FONTS = {
  REGULAR: 'Outfit-Regular',
  MEDIUM: 'Outfit-Medium',
};

/**
 * COLORS PALLETS
 */

export const COLORS = {
  PRIMARY: '#000000',
  GREY: '#545454',
  OFF_WHITE: '#F5F5F5',
  WHITE: '#FFFFFF',
  BLUE_GREY: '#E7E8EA',
};

export const IS_ANDROID = Platform.OS == 'android';

export const SCREEN_PADDING = 20;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const BORDER_RADIUS = 8;
