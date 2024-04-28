import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabScenes} from './type';
import {ScreenWrapper} from '@components';

const Tab = createBottomTabNavigator<BottomTabScenes>();

export const HomeScreen = () => <ScreenWrapper></ScreenWrapper>;

export const BottomsTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="bookings" component={HomeScreen} />
      <Tab.Screen name="messages" component={HomeScreen} />
      <Tab.Screen name="profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};
