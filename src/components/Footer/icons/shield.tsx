import React from "react";
import Svg from "../../Svg/Svg";
import styled from 'styled-components';
import { SvgProps } from "../../Svg/types";


const CustomSvg = styled(Svg)`
    .cls-1{fill:${props => props.theme.isDark ? "#483692" : "#fff"}}
`

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <CustomSvg viewBox="0 0 30.23 36.68" {...props}>
      <g id="banner2"><path className="cls-1" d="M14.57,36.51C7.29,31.4,0,29.12,0,18.35V5.19a1,1,0,0,1,.87-1l1.85-.1a25.68,25.68,0,0,0,11.85-4,1.49,1.49,0,0,1,1,0,26.1,26.1,0,0,0,12,4l1.85.1a1,1,0,0,1,.87,1V18.35c0,10.66-7.18,12.83-14.57,18.16A1,1,0,0,1,14.57,36.51Zm3.59-22.29-5,5L12.07,18c-1.52-1.42-3.7.76-2.28,2.17l2.28,2.28a1.56,1.56,0,0,0,2.28,0l6.09-6.09C21.86,15,19.68,12.81,18.16,14.22Z"/></g>
    </CustomSvg>
  );
};

export default Icon;
