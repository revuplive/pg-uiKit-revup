import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import Flex from "../../../components/Box/Flex";
import { Tag } from "../../../components/Tag";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

const Badge = styled(Tag)<{
  badgeLightColor?: string;
  badgeDarkColor?: string;
}>`
  font-weight: 600;
  color: ${({ theme, badgeLightColor }) => !theme.isDark && badgeLightColor};
  color: ${({ theme, badgeDarkColor }) => theme.isDark && badgeDarkColor};
  border-color: ${({ theme, badgeLightColor }) =>
    !theme.isDark && badgeLightColor};
  border-color: ${({ theme, badgeDarkColor }) =>
    theme.isDark && badgeDarkColor};
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container className="panel-body-container">
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass
          ? entry.calloutClass
          : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex(
            (item) => item.href === location.pathname
          );
          const initialOpenState =
            entry.initialOpenState === true
              ? entry.initialOpenState
              : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some(
                (item) => item.href === location.pathname
              )}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname}
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            isActive={entry.href === location.pathname}
            className={calloutClass}
          >
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <Flex
                width={"100%"}
                justifyContent="space-between"
                alignItems="center"
              >
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                {entry.badge && (
                  <Badge
                    variant="primary"
                    outline
                    badgeLightColor={entry.badgeLightColor}
                    badgeDarkColor={entry.badgeDarkColor}
                  >
                    {entry.badge}
                  </Badge>
                )}
              </Flex>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
