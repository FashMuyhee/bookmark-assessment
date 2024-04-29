import {Image} from 'react-native';
import React from 'react';
import {CenterView, Text} from '@components';
import {COLORS, SCREEN_HEIGHT} from '@utils';
import image from '@assets/images/bookmark-empty.png';

export const EmptyState = () => {
  return (
    <CenterView style={{height: SCREEN_HEIGHT * 0.65, width: '100%', justifyContent: 'center'}}>
      <CenterView style={{width: '80%', rowGap: 5}}>
        <Image
          source={image}
          alt="empty bookmark illustration"
          resizeMode="cover"
          style={{width: '50%', height: '50%', resizeMode: 'contain', marginBottom: 10}}
        />
        <Text isBold fontSize={18} textAlign="center">
          No Bookmarks.
        </Text>
        <Text color={COLORS.GREY} fontSize={15} textAlign="center">
          You have no bookmarked any service, Check back later.
        </Text>
      </CenterView>
    </CenterView>
  );
};
