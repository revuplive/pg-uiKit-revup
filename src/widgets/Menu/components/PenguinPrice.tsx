import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  penguinPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PenguinPrice: React.FC<Props> = ({ penguinPriceUsd }) => {
  return penguinPriceUsd ? (
    <PriceLink
      href="https://info.pangolin.exchange/#/token/0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c"
      target="_blank"
    >
      <LogoIcon width="26px" mr="8px" />
      <Text color="textSubtle" bold>{`$${penguinPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PenguinPrice);
