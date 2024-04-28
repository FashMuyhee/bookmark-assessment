import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';

type Props = {};

export const SpecialOffers = (props: Props) => {
  return (
    <View>
      <SectionTitle title="Special Offers" />
      {/* LIST */}
      <View style={styles.banner}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 160,
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
