import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import LinkExternal from "../../../components/Link/LinkExternal";
import {
  LogoIcon,
  WarningIcon,
  WalletIcon,
  AvaxLogoIcon,
  ChevronDownIcon,
  IPefiLogoIconTop,
} from "../../../components/Svg";
import CopyToClipboard from "../../WalletModal/CopyToClipboard";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { connectorLocalStorageKey } from "../../WalletModal/config";

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const NicknameButton = styled(Button)`
  background: ${({ theme }) => (theme.isDark ? theme.colors.red : "#e4efef")};
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#EC3E3F")};
  margin-right: 10px;
  box-shadow: ${({ theme }) =>
    !theme.isDark
      ? "0px -2px 0px 0px #dbcccc inset"
      : "0px -2px 0px 0px #a0323d inset"};
`;

const ConnectButton = styled(Button)<{ isConnected?: boolean }>`
  background: ${({ theme, isConnected }) =>
    isConnected && !theme.isDark ? "#e4efef" : theme.colors.red};
  color: ${({ isConnected, theme }) =>
    isConnected && !theme.isDark ? "#EC3E3F" : "#ffffff"};
  padding-left: ${({ isConnected }) => isConnected && "28px"};
  padding-right: ${({ isConnected }) => isConnected && "8px"};
  box-shadow: ${({ theme, isConnected }) =>
    isConnected && !theme.isDark
      ? "0px -2px 0px 0px #dbcccc inset"
      : "0px -2px 0px 0px #a0323d inset"};
`;

const AccountContainer = styled.div`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.secondary : "#fff"};
  border-radius: 16px;
  margin-top: 8px;
  padding: 16px 20px;
  border: 2px solid ${({ theme }) => (theme.isDark ? "#141223" : "#f2f0f4")};
`;

const WalletDropdown = styled(Dropdown)`
  .dropdown-content {
    background: transparent;
    box-shadow: none;
    left: 0;
  }
`;

const YourAssetsLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.isDark && theme.colors.red};
  color: ${({ theme }) => theme.isDark && "#ffffff"};
  border-color: ${({ theme }) => theme.isDark && theme.colors.red};
  border-radius: 12px;
  padding: 0 24px;
`;

const StyledLinkExternal = styled(LinkExternal)`
  color: ${({ theme }) => theme.colors.red};
  svg {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

const Label = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? "#fff" : theme.colors.secondary)};
`;

const LowAvaxBalance = styled.div`
  background: ${({ theme }) => (theme.isDark ? "#463b66" : "#fff7eb")};
  border: 1px solid #ffb237;
  padding: 16px 12px;
  border-radius: 16px;
`;

const Warning = styled(WarningIcon)`
  fill: #ffb237;
`;

const WalletWrapper = styled.div`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.secondary : "#fff"};
  border: 2px solid
    ${({ theme }) => (theme.isDark ? theme.colors.red : "#EC3E3F")};
  border-radius: 50px;
  padding: 8px;
  margin-right: -20px;
  z-index: 1;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => (theme.isDark ? theme.colors.red : "#EC3E3F")};
  }
`;

const ConnectedButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowDown = styled(ChevronDownIcon)`
  margin-left: 0;
`;

const PefiBalances = styled.div`
  padding-top: 18px;
`;
interface Props {
  account?: string;
  nickname?: string;
  login: Login;
  logout: () => void;
  pefiBalance?: number;
  avaxBalance?: number;
  iPefiBalance?: number;
}

const UserBlock: React.FC<Props> = ({
  account,
  nickname,
  login,
  logout,
  pefiBalance,
  avaxBalance,
  iPefiBalance,
}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;

  const addMetamask = async (
    tokenAddress: string,
    tokenSymbol: string,
    tokenDecimals: number
  ) => {
    const provider = (window as any).ethereum;
    if (provider) {
      try {
        await provider.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: "",
            },
          },
        });
      } catch (error) {
        console.log("Error => addMetamask");
      }
    }
  };

  const handleAddTokensToMetaMask = async () => {
    const pefiAddress = "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c";
    const iPefiAddress = "0xE9476e16FE488B90ada9Ab5C7c2ADa81014Ba9Ee";

    await addMetamask(pefiAddress, "PEFI", 18);
    await addMetamask(iPefiAddress, "iPEFI", 18);
  };

  const renderAccountData = () => {
    return (
      <AccountContainer>
        <YourAssetsLabel fontSize="20px" bold>
          Your Assets
        </YourAssetsLabel>
        <CopyToClipboard toCopy={account || ""}>
          {accountEllipsis}
        </CopyToClipboard>
        {(avaxBalance || 0) < 0.25 && (
          <Flex justifyContent="center" mb="16px" mt="18px">
            <LowAvaxBalance>
              <Flex alignItems="flex-start">
                <Warning mr="8px" />
                <div>
                  <Label fontSize="14px" bold>
                    AVAX Balance Low
                  </Label>
                  <Label fontSize="14px">
                    You need AVAX for transaction fees.
                  </Label>
                </div>
              </Flex>
            </LowAvaxBalance>
          </Flex>
        )}
        <PefiBalances>
          <Flex>
            <LogoIcon width="24px" mr="8px" />
            <Flex width="100%" justifyContent="space-between">
              <Label fontSize="20px">PEFI</Label>
              <Label fontSize="20px">{pefiBalance}</Label>
            </Flex>
          </Flex>
          {iPefiBalance !== undefined && (
            <Flex>
              <IPefiLogoIconTop width="24px" mr="8px" />
              <Flex width="100%" justifyContent="space-between">
                <Label fontSize="20px">iPEFI</Label>
                <Label fontSize="20px">{iPefiBalance}</Label>
              </Flex>
            </Flex>
          )}
          <Flex>
            <AvaxLogoIcon width="24px" mr="8px" />
            <Flex width="100%" justifyContent="space-between">
              <Label fontSize="20px">AVAX</Label>
              <Label fontSize="20px">{avaxBalance}</Label>
            </Flex>
          </Flex>
        </PefiBalances>
        <Flex mb="16px" mt="16px">
          <StyledLinkExternal
            small
            href={`https://cchain.explorer.avax.network/address/${account}`}
            mr="16px"
          >
            View on AvaxScan
          </StyledLinkExternal>
        </Flex>
        <Flex justifyContent="center">
          <StyledButton scale="sm" mr="8px" onClick={handleAddTokensToMetaMask}>
            Add Tokens
          </StyledButton>
          <StyledButton
            scale="sm"
            variant="secondary"
            onClick={() => {
              logout();
              window.localStorage.removeItem(connectorLocalStorageKey);
            }}
          >
            Logout
          </StyledButton>
        </Flex>
      </AccountContainer>
    );
  };

  return (
    <div>
      {account ? (
        <UserInfo>
          {nickname && nickname.length > 0 && (
            <NicknameButton scale="sm" variant="tertiary">
              {nickname}
            </NicknameButton>
          )}
          <WalletDropdown
            contentClassName="dropdown-content"
            target={
              <ConnectedButtonWrapper>
                <WalletWrapper>
                  <WalletIcon />
                </WalletWrapper>
                <ConnectButton
                  scale="sm"
                  isConnected
                  variant="tertiary"
                  endIcon={<ArrowDown />}
                >
                  {accountEllipsis}
                </ConnectButton>
              </ConnectedButtonWrapper>
            }
          >
            {renderAccountData()}
          </WalletDropdown>
        </UserInfo>
      ) : (
        <ConnectButton
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </ConnectButton>
      )}
    </div>
  );
};

export default UserBlock;
