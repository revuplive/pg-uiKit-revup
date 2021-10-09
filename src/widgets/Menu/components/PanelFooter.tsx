import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import PenguinPrice from "./PenguinPrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import PefiRatio from "./PefiRatio";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingIcon = styled(CogIcon)`
  fill: ${({ theme }) => theme.nav.setting}; ;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  penguinPriceUsd,
  pefiRatio,
  iPefiRatio,
  socials,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <SettingIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <FooterItem>
        <PenguinPrice penguinPriceUsd={penguinPriceUsd} />
        {socials && <SocialLinks socials={socials} />}
      </FooterItem>
      <FooterItem>
        <div>
          {pefiRatio !== undefined && (
            <PefiRatio pefiRatio={pefiRatio} type="xPefi" />
          )}
          {iPefiRatio !== undefined && (
            <PefiRatio pefiRatio={iPefiRatio} type="iPefi" />
          )}
        </div>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </FooterItem>
    </Container>
  );
};

export default PanelFooter;
