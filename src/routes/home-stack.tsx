import {HomeScreen} from '@views';
import {HomeStackScreens} from './type';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<HomeStackScreens>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="bookmarks" component={HomeScreen} />
    </Stack.Navigator>
  );
};
