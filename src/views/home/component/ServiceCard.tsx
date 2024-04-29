import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {BORDER_RADIUS, COLORS, figureFormat} from '@utils';
import {BookmarkIcon, BrokenStarIcon, IconButton, StackView, Text} from '@components';

type Props = {
  category: string;
  providerName: string;
  rating: number;
  serviceCharge: number;
  reviews: number;
};

const BaseElement = ({category, providerName, rating, reviews, serviceCharge}: Props) => {
  return (
    <Pressable style={styles.card}>
      <View style={{width: '35%', height: '100%', borderRadius: BORDER_RADIUS, borderWidth: 1}} />
      <View style={{flex: 1, height: '100%', rowGap: 10, justifyContent: 'space-evenly'}}>
        <StackView align="center" justify="space-between">
          <Text>{providerName}</Text>
          <IconButton size={25} icon={<BookmarkIcon />} />
        </StackView>
        <Text isBold fontSize={16}>
          {category}
        </Text>
        <Text isBold fontSize={16}>
          {figureFormat(serviceCharge)}
        </Text>
        <StackView align="center" style={{columnGap: 5}}>
          <StackView align="center" style={{columnGap: 6}}>
            <BrokenStarIcon />
            <Text fontSize={10} color={COLORS.GREY}>
              {rating}
            </Text>
          </StackView>
          <Text fontSize={10} color={COLORS.PRIMARY}>
            |
          </Text>
          <Text fontSize={10} color={COLORS.GREY}>
            {figureFormat(reviews, false)} reviews
          </Text>
        </StackView>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 20,
    height: 150,
    width: '100%',
    borderRadius: BORDER_RADIUS * 2,
    backgroundColor: COLORS.WHITE,
    shadowColor: '#959DA51A',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
export const ServiceCard = React.memo(BaseElement);
