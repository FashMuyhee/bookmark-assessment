import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {ScreenWrapperProps} from './types';
import {COLORS, SCREEN_HEIGHT, SCREEN_PADDING} from '@utils';

export const ScreenWrapper = ({children, bg, padding = SCREEN_PADDING, noEdges = false, style}: ScreenWrapperProps) => {
  bg = bg ? bg : COLORS.OFF_WHITE;

  const edges: Edge[] = React.useMemo(() => {
    return noEdges ? [] : ['bottom', 'top'];
  }, [noEdges]);

  return (
    <SafeAreaView style={[{backgroundColor: bg, paddingHorizontal: padding, height: SCREEN_HEIGHT}, style]} edges={edges}>
      {children}
    </SafeAreaView>
  );
};
