import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 140.33251 84.04614" {...props}>
      <path
        d="M208.94913,109.26046,196.10653,77.4084a12.34208,12.34208,0,0,0-17.48809-8.04115l-7.2781,3.63877a4.11344,4.11344,0,1,0,3.67907,7.3584l7.27809-3.63877a4.13824,4.13824,0,0,1,3.55874-.0603,4.07578,4.07578,0,0,1,2.25709,2.67509l10.68124,26.25582c-.30423-.02248-.3797-2.85138-.68777-2.85138H156.47938a12.17029,12.17029,0,0,0-11.77448,8.8031,20.52113,20.52113,0,0,0-8.85656,0,12.17025,12.17025,0,0,0-11.77448-8.8031h-41.628c-.30808,0,.17238,2.8289-.13158,2.85138L92.42318,79.40841a4.11148,4.11148,0,0,1,5.832-2.683l7.2781,3.63878a4.11344,4.11344,0,0,0,3.67905-7.3584L101.93453,69.367A12.34141,12.34141,0,0,0,84.43,77.47665L71.603,109.26156a12.24341,12.24341,0,0,0-1.25532,8.24452l3.61081,18.06257A20.62267,20.62267,0,0,0,94.12581,152.101h18.26732a20.62261,20.62261,0,0,0,20.16728-16.53234l3.06922-15.3535a12.21873,12.21873,0,0,1,9.29345,0l3.06922,15.3535A20.62265,20.62265,0,0,0,168.15958,152.101h18.26731a20.62261,20.62261,0,0,0,20.16729-16.53234l3.61082-18.06257A12.24324,12.24324,0,0,0,208.94913,109.26046Z"
        transform="translate(-70.11009 -68.05485)"
      />
    </Svg>
  );
};

export default Icon;
