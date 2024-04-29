import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabScenes} from './type';
import {ScreenWrapper, Text} from '@components';
import {BookingIcon, HomeIcon, MessagingIcon, ProfileIcon, TabBar} from './components';
import {HomeStack} from './home-stack';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabScenes>();
type Props = {
  route: RouteProp<BottomTabScenes>;
};

const PlaceholderScreen = ({route}: Props) => (
  <ScreenWrapper>
    <Text fontSize={30} isBold textTransform="capitalize" style={{marginTop: 20}}>
      {route.name}
    </Text>
  </ScreenWrapper>
);

export const BottomsTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{headerShown: false}}>
      <Tab.Screen name="home_stack" component={HomeStack} options={{tabBarLabel: 'Home', tabBarIcon: ({focused}) => <HomeIcon active={focused} />}} />
      <Tab.Screen
        name="bookings"
        component={PlaceholderScreen}
        options={{tabBarLabel: 'Bookings', tabBarIcon: ({focused}) => <BookingIcon active={focused} />}}
      />
      <Tab.Screen
        name="messages"
        component={PlaceholderScreen}
        options={{tabBarLabel: 'Messages', tabBarIcon: ({focused}) => <MessagingIcon active={focused} />}}
      />
      <Tab.Screen
        name="profile"
        component={PlaceholderScreen}
        options={{tabBarLabel: 'Profile', tabBarIcon: ({focused}) => <ProfileIcon active={focused} />}}
      />
    </Tab.Navigator>
  );
};
