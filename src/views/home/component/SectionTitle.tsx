import React from 'react';
import {StackView, Text} from '@components';
import {COLORS} from '@utils';

type Props = {
  title: string;
};

export const SectionTitle = ({title}: Props) => {
  return (
    <StackView align="center" justify="space-between" style={{marginVertical: '7%'}}>
      <Text textTransform="capitalize" fontSize={18} isBold>
        {title}
      </Text>
      <Text color={COLORS.GREY}>See All</Text>
    </StackView>
  );
};
