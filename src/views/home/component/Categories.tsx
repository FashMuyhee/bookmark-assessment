import {Pressable, View} from 'react-native';
import React from 'react';
import {SectionTitle} from './SectionTitle';
import {CenterView, StackView, Text} from '@components';
import {categories, COLORS, SCREEN_PADDING} from '@utils';

type CategoryProps = {
  icon: React.ReactNode;
  title: string;
};

const Category = ({icon, title}: CategoryProps) => (
  <Pressable
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: '20%',
      rowGap: 10,
    }}>
    <CenterView style={{width: 53, height: 53, borderRadius: 53 / 2, backgroundColor: COLORS.PRIMARY}}>{icon}</CenterView>
    <Text textAlign="center" truncate textTransform="capitalize" color={COLORS.GREY}>
      {title}
    </Text>
  </Pressable>
);

export const Categories = () => {
  return (
    <View style={{marginHorizontal: SCREEN_PADDING}}>
      <SectionTitle title="Categories" />
      {/* LIST */}
      {categories && (
        <StackView align="center" justify="space-between" style={{columnGap: 20, alignContent: 'flex-end', rowGap: 25, flexWrap: 'wrap'}}>
          {categories.map((category, index) => (
            <Category key={`category_${index}`} icon={category.icon()} title={category.category} />
          ))}
        </StackView>
      )}
    </View>
  );
};
