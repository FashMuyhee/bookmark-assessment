import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, StackView, IconButton, ArrowBackIcon, CircleMoreIcon} from '@components';
import {BORDER_RADIUS, COLORS, SCREEN_PADDING} from '@utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeStackScreens} from '@routes/type';

export const Header = () => {
  const navigation = useNavigation<NavigationProp<HomeStackScreens>>();
  return (
    <StackView align="center" justify="space-between" style={styles.container}>
      <IconButton onPress={() => navigation.goBack()} icon={<ArrowBackIcon />} size={48} bg="#333" style={{borderRadius: BORDER_RADIUS}} />
      <Text fontSize={18}>My BookMark</Text>
      <IconButton icon={<CircleMoreIcon />} size={48} style={{borderRadius: BORDER_RADIUS, borderWidth: 1, borderColor: COLORS.GREY}} />
    </StackView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 53,
    paddingHorizontal: SCREEN_PADDING,
    columnGap: 10,
    marginBottom: 10,
  },
});
