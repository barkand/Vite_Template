import { DeviceTypeEnum, StatusTypeEnum } from "../../constant";
import { DefaultCulture, DefaultTheme, DefaultUser } from "../default";

let _device =
  "ontouchstart" in window || "onmsgesturechange" in window
    ? DeviceTypeEnum.Mobile
    : DeviceTypeEnum.Web;

let _lang =
  localStorage.getItem("i18nextLng") ?? import.meta.env.VITE_DEFAULT_LANGUAGE;
if (_lang === "en-US") _lang = "en";

let _mode: any =
  localStorage.getItem("background") ?? import.meta.env.VITE_DEFAULT_MODE;

let _user: any = localStorage.getItem("userId");
let user = _user
  ? { ...DefaultUser, user_id: _user, connected: true }
  : DefaultUser;

const DefaultPublic = {
  device: { name: _device, isMobile: _device === DeviceTypeEnum.Mobile },
  culture: DefaultCulture[_lang],
  theme: {
    background: DefaultTheme[_mode],
    color: localStorage.getItem("color") ?? import.meta.env.VITE_DEFAULT_COLOR,
  },
  user: user,
  alert: {
    open: false,
    message: "",
    severity: StatusTypeEnum.Info,
  },
};

export default DefaultPublic;
