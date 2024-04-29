import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {ServiceCard} from './ServiceCard';
import {recommendedServices, SCREEN_PADDING} from '@utils';
import {useBookmark} from '@hooks';

export const RecommendedServices = () => {
  const {onToggleBookmark} = useBookmark();

  return (
    <View style={{marginHorizontal: SCREEN_PADDING, marginTop: 5}}>
      <SectionTitle title="Recommended services" />
      {recommendedServices.map((service, index) => (
        <ServiceCard key={`service_${index}`} {...service} onToggleBookmark={onToggleBookmark} />
      ))}
    </View>
  );
};
