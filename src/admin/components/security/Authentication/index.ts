import { AuthTypeEnum } from "../../../../core/constant";

import { shortUser as mailShortUser } from "./features/mail";
import { shortUser as walletShortUser } from "./features/wallet";

let authType: any;

if (import.meta.env.VITE_AUTH_TYPE === `${AuthTypeEnum.Wallet}`) {
  authType = walletShortUser;
} else {
  authType = mailShortUser;
}

export { authType as shortUser };
