import React from "react";
import styled from "styled-components";
import * as IconModule from "./icons";
import { SvgProps } from "../Svg/types";
import { FooterProps, FooterBodyProps, FlexProps } from "./types";
import Text from "../Text/Text";
import ResetCSS from "../../ResetCSS";
import Link from "../Link/Link";
import { FooterLinks, FooterIconLinks } from "./config";
import { useMatchBreakpoints } from "../../hooks";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const Logo = Icons["FooterIcon"];
const Shield = Icons["ShieldIcon"];

const Column = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  width: ${({ width }) => width || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems, isStacked }) =>
    isStacked ? "center" : alignItems || "stretch"};
  margin-bottom: ${({ mb }) => mb || 0};
`;

const Row = styled.div<FlexProps>`
  display: flex;
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  width: ${({ width }) => width || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
`;
const FooterBody = styled.div<FooterBodyProps>`
  max-width: 1200px; //1200px
  display: flex;
  flex-direction: ${(props) => (props.isStacked ? "column" : "row")};
  justify-content: ${({ isStacked }) =>
    isStacked ? "center" : "space-around"};
  align-items: ${({ isStacked }) => (isStacked ? "center" : "stretch")};
  padding: 2rem 2rem 4rem 2rem;
  margin: auto;
`;

const FooterWrapper = styled.div`
  width: "100%";
  background-color: ${(props) => (!props.theme.isDark ? "#2A2844" : "#121020")};
`;

const CustomLink = styled(Link).attrs((props) => ({
  small: true,
  color: "#B6B6DB",
  fontFamily: "Telegraf",
  fontWeight: "200",
  fontSize: "0.7rem",
  mb: "6px",
}))``;

const LogoWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  max-width: 280px;
`;

const Footer: React.FC<FooterProps> = (props) => {
  // check if screen is in medium size or below
  const bPoints = useMatchBreakpoints();
  const isStacked = !bPoints.isLg && !bPoints.isXl;
  return (
    <>
      <ResetCSS />
      <FooterWrapper>
        <FooterBody isStacked={isStacked}>
          <Column
            isStacked={isStacked}
            maxWidth="260px"
            mb={isStacked ? "2rem" : "0"}
          >
            <LogoWrapper>
              <Logo width="100%" />
            </LogoWrapper>
            <Text
              as="p"
              textAlign={isStacked ? "center" : "left"}
              fontFamily="Telegraf"
              fontWeight="200"
              fontSize=".8rem"
              color="#B7B5DE"
              mb="6px"
            >
              The Penguin Finance protocol is bringing yield-farming, staking
              and more functionalities to the Avalanche Network.
            </Text>
            <Row isStacked={isStacked} alignItems="flex-end">
              <div>
                <Shield width="16px" />
              </div>
              <Text ml="10px" color="#fff">
                Audited by Certik
              </Text>
            </Row>
          </Column>
          {FooterLinks.map((data) => (
            <Column isStacked={isStacked}>
              <Text color="#fff" mb="6px">
                {data.title}
              </Text>
              {data.links.map((link) => (
                //  we have link.url too "future use"
                <CustomLink>{link.title}</CustomLink>
              ))}
            </Column>
          ))}
          <Column isStacked={isStacked} alignItems="center" maxWidth="350px">
            <Text color="#fff" mb="10px">
              Official Social Media
            </Text>
            <Row
              isStacked={isStacked}
              justifyContent="space-around"
              alignItems="center"
              width="200px"
            >
              {FooterIconLinks[0].map((item) => {
                const Icon = Icons[`${item.name}`];
                return (
                  <Link href={item.url}>
                    <Icon width="24px" height="24px" />
                  </Link>
                );
              })}
            </Row>
            <Text color="#fff" mt="1.5rem" mb="10px">
              Powered by
            </Text>
            <Row
              isStacked={isStacked}
              justifyContent="space-around"
              alignItems="center"
              width="100%"
            >
              {FooterIconLinks[1].map((item) => {
                const Icon = Icons[`${item.name}`];
                return (
                  <Link href={item.url}>
                    <Icon width="30px" height="30px" />
                  </Link>
                );
              })}
            </Row>
          </Column>
        </FooterBody>
      </FooterWrapper>
    </>
  );
};

export default Footer;
