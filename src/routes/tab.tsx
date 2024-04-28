import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabScenes} from './type';
import {ScreenWrapper, Text} from '@components';
import {BookingIcon, HomeIcon, MessagingIcon, ProfileIcon, TabBar} from './components';
import {HomeStack} from './home-stack';

const Tab = createBottomTabNavigator<BottomTabScenes>();

export const HomeScreen = () => (
  <ScreenWrapper>
    <Text>Am</Text>
  </ScreenWrapper>
);

export const BottomsTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{headerShown: false}}>
      <Tab.Screen name="home_stack" component={HomeStack} options={{tabBarIcon: ({focused}) => <HomeIcon active={focused} />}} />
      <Tab.Screen name="bookings" component={HomeScreen} options={{tabBarIcon: ({focused}) => <BookingIcon active={focused} />}} />
      <Tab.Screen name="messages" component={HomeScreen} options={{tabBarIcon: ({focused}) => <MessagingIcon active={focused} />}} />
      <Tab.Screen name="profile" component={HomeScreen} options={{tabBarIcon: ({focused}) => <ProfileIcon active={focused} />}} />
    </Tab.Navigator>
  );
};
