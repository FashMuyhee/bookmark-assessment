import {Animated, View, StyleSheet, ListRenderItemInfo, ImageBackground, Image} from 'react-native';
import React from 'react';
import {SCREEN_PADDING, SCREEN_WIDTH, specialOffer} from '@utils';
import bg from '@assets/images/offer-bg.png';
import man from '@assets/images/happy-man.png';
import {Text} from '@components';

const itemWidth = SCREEN_WIDTH - SCREEN_PADDING * 2;
const DOT_SIZE = 4;
const FULL_DOT_SIZE = 14;

type PaginationProps = {
  scrollX: Animated.Value;
};

const Pagination = ({scrollX}: PaginationProps) => {
  return (
    <View style={[styles.pagination]}>
      {specialOffer?.map((item, index) => {
        const inputRange = [(index - 1) * itemWidth, index * itemWidth, (index + 1) * itemWidth];
        const animatedWidth = scrollX.interpolate({
          inputRange,
          outputRange: [DOT_SIZE, FULL_DOT_SIZE, DOT_SIZE],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#CFCACA', '#FFF', '#CFCACA'],
          extrapolate: 'clamp',
        });
        return <Animated.View key={`pagination_${index}`} style={[styles.paginationIndicator, {width: animatedWidth, backgroundColor}]} />;
      })}
    </View>
  );
};

const SliderBanner = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef<Animated.FlatList>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const renderBanner = ({item, index}: ListRenderItemInfo<(typeof specialOffer)[0]>) => {
    const inputRange = [(index - 1) * itemWidth, index * itemWidth, (index + 1) * itemWidth];

    const scale = scrollX.interpolate({
      inputRange: inputRange,
      outputRange: [0, 1, 0],
    });
    return (
      <Animated.View key={`banner${index}`} style={[styles.banner, {transform: [{scale}]}]}>
        <ImageBackground
          source={bg}
          style={{paddingHorizontal: 24, height: '100%', flexDirection: 'row'}}
          imageStyle={{borderRadius: 30}}
          resizeMode="cover">
          <View style={{width: '50%', marginTop: '9%', rowGap: 5}}>
            <Text color="white" isBold fontSize={30}>
              {item.type}
            </Text>
            <Text color="white" isBold fontSize={18} textTransform="capitalize">
              {item.title}
            </Text>
            <Text numberLines={2} color="white" fontSize={11}>
              {item.description}
            </Text>
          </View>
          <Image source={man} style={styles.man} />
        </ImageBackground>
      </Animated.View>
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % specialOffer.length;
      flatListRef?.current && flatListRef?.current.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, specialOffer.length]);

  return (
    <View style={styles.bannerContainer}>
      <Animated.FlatList
        data={specialOffer}
        pagingEnabled
        horizontal
        // ref={flatListRef}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        renderItem={renderBanner}
        scrollEnabled
      />
      <Pagination scrollX={scrollX} />
    </View>
  );
};

export default SliderBanner;
const styles = StyleSheet.create({
  bannerContainer: {
    height: 160,
    borderRadius: 30,
    width: '100%',
  },
  banner: {
    height: '100%',
    width: itemWidth,
    borderRadius: 30,
  },
  man: {width: '50%', height: '100%', resizeMode: 'contain', marginLeft: 15},
  pagination: {
    flexDirection: 'row',
    height: 10,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    columnGap: 5,
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
});
