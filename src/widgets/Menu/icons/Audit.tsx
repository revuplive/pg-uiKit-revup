import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 278 337.2" {...props}>
      <g>
        <path  d="M134,335.8c-67-47-134-68-134-167v-121c0-5,3-8,8-9l17-1c39-3,76-16,109-37c3-1,7-1,9,0c33,21,71,34,110,37
          l17,1c4,1,8,4,8,9v121c0,98-66,118-134,167C141,337.8,137,337.8,134,335.8z M167,130.8l-46,46l-10-11c-14-13-34,7-21,20l21,21
          c6,6,15,6,21,0l56-56C201,137.8,181,117.8,167,130.8z"/>
      </g>
    </Svg>
  );
};

export default Icon;
