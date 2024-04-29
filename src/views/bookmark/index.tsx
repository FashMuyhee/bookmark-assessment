import React from 'react';
import {ScreenWrapper, Text} from '@components';
import {COLORS, SCREEN_HEIGHT, SCREEN_PADDING, Service} from '@utils';
import {useBookmark} from '@hooks';
import {ServiceCard, ServiceCategoryList} from '@views/home/component';
import {FlatList, ListRenderItemInfo} from 'react-native';

type Props = {};

export const BookmarkScreen = (props: Props) => {
  const {bookmarks, onToggleBookmark} = useBookmark();
  const [category, setCategory] = React.useState('all');

  const renderBookmarks = ({item}: ListRenderItemInfo<Service>) => <ServiceCard {...item} onToggleBookmark={onToggleBookmark} />;

  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE} style={{height: SCREEN_HEIGHT - 50}}>
      <ServiceCategoryList category={category} onChangeCategory={setCategory} />
      
      <FlatList data={bookmarks} renderItem={renderBookmarks} keyExtractor={item => item.id} />
    </ScreenWrapper>
  );
};
