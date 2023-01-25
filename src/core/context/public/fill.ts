import { DeviceTypeEnum, StatusTypeEnum } from "../../constant";
import {
  DefaultCulture,
  DefaultTheme,
  DefaultUser,
  DefaultWallet,
} from "../default";

let _device =
  "ontouchstart" in window || "onmsgesturechange" in window
    ? DeviceTypeEnum.Mobile
    : DeviceTypeEnum.Web;

let _lang =
  localStorage.getItem("i18nextLng") ?? import.meta.env.VITE_DEFAULT_LANGUAGE;
if (_lang === "en-US") _lang = "en";

let _mode: any =
  localStorage.getItem("background") ?? import.meta.env.VITE_DEFAULT_MODE;

let _wallet: any = localStorage.getItem("wallet");
let wallet = _wallet ? { account: _wallet, connected: true } : DefaultWallet;

const DefaultPublic = {
  device: { name: _device, isMobile: _device === DeviceTypeEnum.Mobile },
  culture: DefaultCulture[_lang],
  theme: {
    background: DefaultTheme[_mode],
    color: localStorage.getItem("color") ?? import.meta.env.VITE_DEFAULT_COLOR,
  },
  user: DefaultUser,
  wallet: wallet,
  alert: {
    open: false,
    message: "",
    severity: StatusTypeEnum.Info,
  },
};

export default DefaultPublic;
