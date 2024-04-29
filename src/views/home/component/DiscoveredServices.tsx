import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {ServiceCard} from './ServiceCard';
import {discoveredServices} from '@utils';

export const DiscoveredServices = () => {
  return (
    <View>
      <SectionTitle title="Discover & Explore Services" />
      {discoveredServices.map((service, index) => (
        <ServiceCard key={`service_${index}`} {...service} />
      ))}
    </View>
  );
};
