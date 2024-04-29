import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CircleMoreIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M8 12h.01M12 12h.01M16 12h.01" stroke="#545454" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#545454" strokeWidth={2} />
    </Svg>
  );
};
