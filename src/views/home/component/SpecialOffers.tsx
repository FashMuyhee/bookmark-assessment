import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {SCREEN_PADDING} from '@utils';

type Props = {};

export const SpecialOffers = (props: Props) => {
  return (
    <View style={{marginHorizontal: SCREEN_PADDING}}>
      <SectionTitle title="Special Offers" />
      {/* LIST */}
      <View style={styles.banner}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 160,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
