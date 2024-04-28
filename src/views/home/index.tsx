import React from 'react';
import {ScreenWrapper} from '@components';
import {Categories, Header, LocationBar, Searchbar, SpecialOffers} from './component';
import {COLORS, SCREEN_PADDING} from '@utils';
import {ScrollView} from 'react-native';

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE}>
      <Header />
      <ScrollView contentContainerStyle={{paddingHorizontal: SCREEN_PADDING}}>
        <Searchbar />
        <LocationBar />
        <SpecialOffers />
        <Categories />
      </ScrollView>
    </ScreenWrapper>
  );
};
