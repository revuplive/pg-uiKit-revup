import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    nickname?: string;
    login: Login;
    logout: () => void;
    pefiBalance?: number;
    avaxBalance?: number;
    iPefiBalance?: number;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
