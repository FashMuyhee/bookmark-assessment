import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowBackIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M4 12l6 6m-6-6l6-6m-6 6h10.5m5.5 0h-2.5" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};
