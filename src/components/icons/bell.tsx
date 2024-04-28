import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BellIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525C8.883 2.675 10.41 2 12 2c.337 0 .672.03 1 .09M13.73 21a1.999 1.999 0 01-3.46 0M19 8a3 3 0 100-6 3 3 0 000 6z"
        stroke="#545454"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
