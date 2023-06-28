import { AuthTypeEnum } from "@/core/constant";

import { WalletButton } from "../features/wallet";
import { MailButton } from "../features/mail";
import { MobileButton } from "../features/mobile";

export default function AuthButton() {
  return (
    <>
      {import.meta.env.VITE_AUTH_TYPE === `${AuthTypeEnum.Wallet}` ? (
        <WalletButton />
      ) : import.meta.env.VITE_AUTH_TYPE === `${AuthTypeEnum.Mobile}` ? (
        <MobileButton />
      ) : (
        <MailButton />
      )}
    </>
  );
}
