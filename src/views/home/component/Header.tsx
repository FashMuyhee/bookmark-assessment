import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Text, StackView, IconButton, BellIcon, BookmarkIcon} from '@components';
import {usGetPartOfDay} from '@hooks';
import {COLORS, SCREEN_PADDING} from '@utils';
import avatar from '@assets/images/avatar.png';
import handWave from '@assets/images/hand-wave.png';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeStackScreens} from '@routes/type';

export const Header = () => {
  const partOfDay = usGetPartOfDay();

  const navigation = useNavigation<NavigationProp<HomeStackScreens>>();
  return (
    <StackView align="center" justify="space-between" style={styles.container}>
      <View style={styles.avatar}>
        <Image style={{height: '100%', width: '100%', borderRadius: 20}} resizeMode="cover" source={avatar} />
      </View>
      <View style={{flex: 1}}>
        <StackView align="center" style={{gap: 5}}>
          <Text textTransform="capitalize" color={COLORS.GREY}>{`good ${partOfDay}`}</Text>
          <Image source={handWave} style={styles.handWave} />
        </StackView>
        <Text fontSize={16}>Chaitanya Goyal</Text>
      </View>
      <StackView align="center" style={{columnGap: 5}}>
        <IconButton size={30} icon={<BellIcon />} style={{alignItems: 'flex-end'}} />
        <IconButton onPress={() => navigation.navigate('bookmarks')} size={30} icon={<BookmarkIcon />} style={{alignItems: 'flex-end'}} />
      </StackView>
    </StackView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 53,
    paddingHorizontal: SCREEN_PADDING,
    columnGap: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'green',
  },
  handWave: {height: 22, width: 22, resizeMode: 'contain'},
});
