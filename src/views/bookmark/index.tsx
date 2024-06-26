import React from 'react';
import {ScreenWrapper} from '@components';
import {COLORS, SCREEN_HEIGHT, SCREEN_PADDING, Service} from '@utils';
import {useBookmark} from '@hooks';
import {ServiceCard, ServiceCategoryList} from '@views/home/component';
import {FlatList, LayoutAnimation, ListRenderItemInfo} from 'react-native';
import {EmptyState, Header} from './components';
import useFilterService from '@hooks/useFilterService';


export const BookmarkScreen = () => {
  const {bookmarks, onToggleBookmark} = useBookmark();
  const [category, setCategory] = React.useState('all');
  const {filtered} = useFilterService({data: bookmarks, category});

  const renderBookmarks = ({item}: ListRenderItemInfo<Service>) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    return <ServiceCard {...item} onToggleBookmark={onToggleBookmark} />;
  };

  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE} style={{height: SCREEN_HEIGHT - 50}}>
      <Header />
      {bookmarks.length > 0 && <ServiceCategoryList category={category} onChangeCategory={setCategory} />}
      <FlatList
        contentContainerStyle={{paddingHorizontal: SCREEN_PADDING}}
        data={filtered}
        renderItem={renderBookmarks}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyState />}
      />
    </ScreenWrapper>
  );
};
