import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {ServiceCard} from './ServiceCard';
import {discoveredServices, SCREEN_PADDING} from '@utils';
import {ServiceCategoryList} from './ServiceCategoryList';

export const DiscoveredServices = () => {
  const [category, setCategory] = React.useState('all');

  return (
    <View>
      <View style={{marginHorizontal: SCREEN_PADDING}}>
        <SectionTitle title="Discover & Explore Services" />
      </View>
      <ServiceCategoryList category={category} onChangeCategory={setCategory} />
      {discoveredServices.map((service, index) => (
        <ServiceCard key={`service_${index}`} {...service} />
      ))}
    </View>
  );
};
