import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {StackView, FilterIcon, SearchIcon, IconButton, CenterView} from '@components';
import {BORDER_RADIUS, COLORS, FONTS} from '@utils';

export const Searchbar = () => {
  return (
    <StackView align="center" justify="space-between" style={styles.container}>
      {/* NOTE: I DECIDED TO ALIGN THE SEARCH ICON PROPERLY IRRESPECTIVE OF WHAT WAS DESIGNED.
       LOOKING AT THE ORIGINAL THE SEARCH ICON ALIGNMENT DISFIGURED THE WHOLE TOP SECTION OF THE APP MY OPINION THOUGH. */}
      <CenterView style={{marginLeft: '2%'}}>
        <SearchIcon />
      </CenterView>
      <TextInput selectionColor={COLORS.GREY} placeholderTextColor={COLORS.GREY} placeholder="Search..." style={styles.input} />
      <IconButton icon={<FilterIcon />} />
    </StackView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingHorizontal: 10,
    columnGap: 10,
    backgroundColor: COLORS.OFF_WHITE,
    borderRadius: BORDER_RADIUS,
    width: '100%',
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.REGULAR,
    color: COLORS.PRIMARY,
  },
});
