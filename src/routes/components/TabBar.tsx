import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StackView, Text} from '@components';
import {COLORS, IS_ANDROID} from '@utils';
import {Pressable} from 'react-native';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <StackView
      justify="space-between"
      style={{
        paddingBottom: IS_ANDROID ? 0 : 10,
        height: 80,
        width: '100%',
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 30,
        shadowColor: COLORS.GREY,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4.65,
        elevation: 8,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            key={route.name}
            accessibilityRole="button"
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: 5,
            }}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}>
            {/* @ts-ignore */}
            {options.tabBarIcon({focused: isFocused, color: COLORS.GREY, size: 20})}
            <Text textTransform="capitalize" fontSize={11} isBold={isFocused} color={COLORS.GREY}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </StackView>
  );
};
