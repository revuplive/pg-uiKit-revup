import React from "react";
import styled from "styled-components";
import { XPefiLogoIcon, IPefiLogoIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import Flex from "../../../components/Box/Flex";

interface Props {
  pefiRatio?: number;
  type?: string;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 0;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PefiRatio: React.FC<Props> = ({ pefiRatio, type }) => {
  return pefiRatio ? (
    <PriceLink
      href="https://info.pangolin.exchange/#/token/0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c"
      target="_blank"
    >
      <Flex>
        {type === "xPefi" ? (
          <XPefiLogoIcon width="24px" mr="8px" />
        ) : (
          <IPefiLogoIcon width="24px" mr="8px" />
        )}
        <Text color="textSubtle" bold>{`${pefiRatio.toFixed(3)} PEFI`}</Text>
      </Flex>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PefiRatio);
