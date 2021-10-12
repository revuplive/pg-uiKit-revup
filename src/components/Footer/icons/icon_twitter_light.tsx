import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";
import styled from 'styled-components';

const CustomSvg = styled(Svg)`
.cls-1{
  fill:${props => props.theme.isDark ? "#483692" : "#b6b6db"}
}
`

const Icon: React.FC<SvgProps> = (props) => {
    return (
      <CustomSvg   viewBox="0 0 46.99 38.12" {...props}>
         <g><path  className="cls-1" d="M14.88,38.12A27.16,27.16,0,0,0,42.29,11.2a4.17,4.17,0,0,0,0-.5V9.4a21.08,21.08,0,0,0,4.7-5A21.76,21.76,0,0,1,41.51,6,10.19,10.19,0,0,0,45.69.78a24.07,24.07,0,0,1-6,2.35,9.32,9.32,0,0,0-7-3.13A9.81,9.81,0,0,0,23,9.66a5,5,0,0,0,.27,2.09A27,27,0,0,1,3.39,1.57a9.91,9.91,0,0,0-1.3,5,10.37,10.37,0,0,0,4.17,8.09,8.76,8.76,0,0,1-4.43-1.3h0a9.54,9.54,0,0,0,7.83,9.4A8.52,8.52,0,0,1,7.05,23a4.55,4.55,0,0,1-1.83-.26,9.89,9.89,0,0,0,9.14,6.78,19.74,19.74,0,0,1-12,4.18A7.45,7.45,0,0,1,0,33.42a24.73,24.73,0,0,0,14.88,4.7"/></g>
      </CustomSvg>
    );
  };
  
export default Icon;
