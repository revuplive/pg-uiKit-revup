import React from 'react';
import Svg from '../../Svg/Svg';
import styled from 'styled-components';
import { useTheme } from "styled-components";
import { SvgProps } from '../../Svg/types';


interface LogoProps extends SvgProps {
    isDark: boolean;
}




const CustomSvg = styled(Svg)`
    position:absolute;
    top:0;
    left:0;
    .cls-1{font-size:42.13px;font-family:AndesW04-Black;font-weight:800;letter-spacing:-0.03em;}
    .cls-1,.cls-4{fill:#fff;}
    .cls-2{letter-spacing:-0.02em;}
    .cls-3,.cls-5{fill: ${props => props.theme.isDark ? "#483692" : "#9a97c4" }}
    .cls-3{letter-spacing:-0.02em;}
    .cls-6{fill:#342c6d;}
`;


const Icon: React.FC<LogoProps> = (props) =>{
    return(
        <CustomSvg viewBox="0 0 395.43 82.36"  {...props}>
            <g id="banner2">
                <text className="cls-1" transform="translate(74.91 42.58)"
                >P
                    <tspan className="cls-2" x="25.24" y="0">
                        enguin Finance
                    </tspan>
                    <tspan className="cls-3" fill="#fff" x="304.74" y="0">.</tspan>
                </text>
                <circle className="cls-4" cx="11.35" cy="29.2" r="11.35"/>
                <path className="cls-5" d="M30.27,5.45h0A29.5,29.5,0,0,1,59.68,35l0,3a4.5,4.5,0,0,0,4.49,4.51h0a4.49,4.49,0,0,0,4.51-4.49l0-6.14C68.74,15.36,55.51,1.87,39.15.28a28.37,28.37,0,0,0-7.81,0A28.52,28.52,0,0,0,11,11.36a.13.13,0,0,0,.17.18C13.41,10,20.93,5.42,30.27,5.45Z"/>
                <circle className="cls-4" cx="41.44" cy="29.2" r="11.35"/>
                <circle className="cls-6" cx="6.96" cy="24.39" r="3.58"/>
                <circle className="cls-6" cx="37.22" cy="24.39" r="3.58"/>
                <path className="cls-5" d="M9.67,30.24A.17.17,0,0,1,9.79,30H26a.29.29,0,0,1,.28.24c.24,1.46,2,9.37-6.08,12a.26.26,0,0,1-.27-.1Z"/>
            </g>
        </CustomSvg>
    )
}
export default Icon;

