import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {SCREEN_PADDING} from '@utils';
import SliderBanner from './SliderBanner';

type Props = {};

export const SpecialOffers = (props: Props) => {
  return (
    <View style={{marginHorizontal: SCREEN_PADDING}}>
      <SectionTitle title="Special Offers" />
      {/* LIST */}
      <SliderBanner />
    </View>
  );
};
