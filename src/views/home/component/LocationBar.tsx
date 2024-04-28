import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {StackView, IconButton, CenterView, GpsIcon, LocationIcon} from '@components';
import {BORDER_RADIUS, COLORS, FONTS, SCREEN_PADDING, SCREEN_WIDTH} from '@utils';

export const LocationBar = () => {
  return (
    <StackView align="center" justify="space-between" style={styles.container}>
      <StackView style={[styles.search, styles.flatStyle]}>
        <CenterView style={{marginLeft: '5%'}}>
          <LocationIcon />
        </CenterView>
        <TextInput
          selectionColor={COLORS.GREY}
          placeholderTextColor={COLORS.GREY}
          placeholder="267 New AVenue Park.Indore In..."
          style={styles.input}
        />
      </StackView>
      <IconButton icon={<GpsIcon />} style={[styles.flatStyle, styles.gpsIcon]} />
    </StackView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    columnGap: 10,
    width: SCREEN_WIDTH - SCREEN_PADDING * 2,
    alignSelf: 'center',
    marginTop: 9,
  },
  flatStyle: {
    backgroundColor: COLORS.OFF_WHITE,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    borderColor: COLORS.BLUE_GREY,
    height: '100%',
  },
  search: {
    columnGap: 10,
    flex: 1,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.REGULAR,
    color: COLORS.PRIMARY,
  },
  gpsIcon: {height: '100%', width: 60},
});
