import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {ServiceCard} from './ServiceCard';
import {recommendedServices, SCREEN_PADDING} from '@utils';

export const RecommendedServices = () => {
  return (
    <View style={{marginHorizontal: SCREEN_PADDING}}>
      <SectionTitle title="Recommended services" />
      {recommendedServices.map((service, index) => (
        <ServiceCard key={`service_${index}`} {...service} />
      ))}
    </View>
  );
};
