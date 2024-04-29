import React from 'react';
import {ScreenWrapper} from '@components';
import {Categories, DiscoveredServices, Header, LocationBar, RecommendedServices, Searchbar, SpecialOffers} from './component';
import {COLORS, SCREEN_HEIGHT, SCREEN_PADDING} from '@utils';
import {ScrollView} from 'react-native';

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE} style={{height: SCREEN_HEIGHT - 50}}>
      <Header />
      <ScrollView contentContainerStyle={{paddingHorizontal: SCREEN_PADDING}}>
        <Searchbar />
        <LocationBar />
        <SpecialOffers />
        <Categories />
        <RecommendedServices />
        <DiscoveredServices />
      </ScrollView>
    </ScreenWrapper>
  );
};
