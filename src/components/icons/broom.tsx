import React from 'react';
import Svg, {ClipPath, Defs, Path, G} from 'react-native-svg';

export const BroomIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_1_162)" stroke="#fff" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M10.5 12.75V2.25c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v10.5M10.5 10.5h3M19.5 23.25h-15l2.025-9.3c.15-.675.75-1.2 1.5-1.2h8.1c.675 0 1.35.525 1.5 1.2l1.875 9.3zM6.75 15.75h10.5M8.25 20.25v2.25M15.75 21.75v.75" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_162">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
