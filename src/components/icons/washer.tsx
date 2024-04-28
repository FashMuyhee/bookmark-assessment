import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const WasherIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.25.75H3.75a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5zM5.25 3.75h3M19 3.2v1M16 3.2v1M2.25 6.75h19.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 20.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM9.75 15a2.25 2.25 0 012.195-2.25"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
