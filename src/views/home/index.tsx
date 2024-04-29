import React from 'react';
import {ScreenWrapper} from '@components';
import {Categories, DiscoveredServices, Header, LocationBar, RecommendedServices, Searchbar, SpecialOffers} from './component';
import {COLORS, SCREEN_HEIGHT} from '@utils';
import {ScrollView} from 'react-native';

export const HomeScreen = () => {
  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE} style={{height: SCREEN_HEIGHT - 50}}>
      <Header />
      <ScrollView>
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
