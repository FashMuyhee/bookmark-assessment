import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const GpsIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.5 12h-2.111m0 0A7.388 7.388 0 0112 19.389M19.389 12A7.39 7.39 0 0012 4.611M12 2.5v2.111m0 0a7.388 7.388 0 100 14.778M2.5 12h2.111M12 21.5v-2.111"
        stroke="#545454"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M12 16.222a4.222 4.222 0 100-8.444 4.222 4.222 0 000 8.444z"
        stroke="#545454"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
};
