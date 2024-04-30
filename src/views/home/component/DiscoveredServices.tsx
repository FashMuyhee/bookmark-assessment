import {View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {ServiceCard} from './ServiceCard';
import {discoveredServices, SCREEN_PADDING} from '@utils';
import {ServiceCategoryList} from './ServiceCategoryList';
import {useBookmark} from '@hooks';
import useFilterService from '@hooks/useFilterService';

export const DiscoveredServices = () => {
  const [category, setCategory] = React.useState('all');
  const {onToggleBookmark} = useBookmark();
  const {filtered} = useFilterService({data: discoveredServices, category});

  return (
    <View>
      <View style={{marginHorizontal: SCREEN_PADDING}}>
        <SectionTitle title="Discover & Explore Services" />
      </View>
      <ServiceCategoryList category={category} onChangeCategory={setCategory} />
      <View style={{paddingHorizontal: SCREEN_PADDING}}>
        {filtered.map((service, index) => (
          <ServiceCard key={`service_${index}`} {...service} onToggleBookmark={onToggleBookmark} />
        ))}
      </View>
    </View>
  );
};
