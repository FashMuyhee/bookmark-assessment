import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomsTabs} from './tab';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomsTabs />
    </NavigationContainer>
  );
};
