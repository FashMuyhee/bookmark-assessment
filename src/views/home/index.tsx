import React from 'react';
import {ScreenWrapper} from '@components';
import {Header} from './component';
import {COLORS} from '@utils';

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <ScreenWrapper padding={0} bg={COLORS.WHITE}>
      <Header />
    </ScreenWrapper>
  );
};
