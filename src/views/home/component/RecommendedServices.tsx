import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {ServiceCard} from './ServiceCard';
import {recommendedServices} from '@utils';

export const RecommendedServices = () => {
  return (
    <View>
      <SectionTitle title="Recommended services" />
      {recommendedServices.map((service, index) => (
        <ServiceCard key={`service_${index}`} {...service} />
      ))}
    </View>
  );
};
