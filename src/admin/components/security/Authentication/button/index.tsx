import { AuthTypeEnum } from "../../../../../core/constant";

import { WalletButton } from "../features/wallet";
import { MailButton } from "../features/mail";

export default function AuthButton() {
  return (
    <>
      {import.meta.env.VITE_AUTH_TYPE === `${AuthTypeEnum.Wallet}` ? (
        <WalletButton />
      ) : (
        <MailButton />
      )}
    </>
  );
}
