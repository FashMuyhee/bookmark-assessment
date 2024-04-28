import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LocationIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path d="M10 11.25A3.125 3.125 0 1010 5a3.125 3.125 0 000 6.25zm0-5A1.875 1.875 0 1110 10a1.875 1.875 0 010-3.75z" fill="#545454" />
      <Path
        d="M10 18.75l5.273-6.218.217-.282a6.806 6.806 0 001.385-4.125 6.875 6.875 0 10-13.75 0 6.802 6.802 0 001.384 4.123l.001.002s.187.246.216.28L10 18.75zm4.492-7.253l-.179.234L10 16.817l-4.319-5.093-.174-.229a5.563 5.563 0 01-1.132-3.37 5.625 5.625 0 0111.25 0 5.566 5.566 0 01-1.133 3.372z"
        fill="#545454"
      />
    </Svg>
  );
};
