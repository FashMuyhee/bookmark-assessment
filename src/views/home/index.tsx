import React from 'react';
import {ScreenWrapper} from '@components';
import {Header, LocationBar, Searchbar} from './component';
import {COLORS} from '@utils';

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE}>
      <Header />
      <Searchbar />
      <LocationBar />
    </ScreenWrapper>
  );
};
