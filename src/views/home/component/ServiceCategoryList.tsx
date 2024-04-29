import {Text} from '@components';
import {categories, COLORS} from '@utils';
import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';

type Props = {
  onChangeCategory: (category: string) => void;
  category: string;
};

type CategoryChipProps = {
  category: string;
  onPress: (category: string) => void;
  selected: boolean;
};

const CategoryChip = ({category, onPress, selected}: CategoryChipProps) => {
  return (
    <Pressable
      onPress={() => onPress(category)}
      style={[styles.chip, {borderWidth: selected ? 0 : 1, backgroundColor: selected ? COLORS.PRIMARY : 'transparent'}]}>
      <Text textTransform="capitalize" color={selected ? COLORS.WHITE : COLORS.GREY} textAlign="center" fontSize={14}>
        {category}
      </Text>
    </Pressable>
  );
};

export const ServiceCategoryList = ({category, onChangeCategory}: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 20, height: 40}}
      contentContainerStyle={{alignItems: 'center'}}>
      {[{category: 'all'}, ...categories].map(c => (
        <CategoryChip key={c.category} category={c.category} onPress={c => onChangeCategory(c)} selected={category == c.category} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderColor: COLORS.GREY,
    marginLeft: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 30,
  },
});
