import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabScenes} from './type';
import {ScreenWrapper} from '@components';
import {BookingIcon, HomeIcon, MessagingIcon, ProfileIcon, TabBar} from './components';

const Tab = createBottomTabNavigator<BottomTabScenes>();

export const HomeScreen = () => <ScreenWrapper></ScreenWrapper>;

export const BottomsTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="home" component={HomeScreen} options={{tabBarIcon: ({focused}) => <HomeIcon active={focused} />}} />
      <Tab.Screen name="bookings" component={HomeScreen} options={{tabBarIcon: ({focused}) => <BookingIcon active={focused} />}} />
      <Tab.Screen name="messages" component={HomeScreen} options={{tabBarIcon: ({focused}) => <MessagingIcon active={focused} />}} />
      <Tab.Screen name="profile" component={HomeScreen} options={{tabBarIcon: ({focused}) => <ProfileIcon active={focused} />}} />
    </Tab.Navigator>
  );
};
