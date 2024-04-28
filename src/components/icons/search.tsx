import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

export const SearchIcon = () => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <G clipPath="url(#clip0_1_111)" stroke="#545454" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M7.875 14.625a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zM12.938 12.938l3.937 3.937" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_111">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
