import { DefaultUser } from "../../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../../core/libs";

const SendCode = async (user_id: string) => {
  let _result: any = await PostAuthApi({ user_id: user_id, type: "mobile" }, "admin/send_code");
  return _result;
};

const Login = async (user_id: string, code: string) => {
  let _result: any = await PostAuthApi(
    { user_id: user_id, code: code },
    "admin/login_code"
  );

  if (_result.code === 200 && _result.items.connected === true) {
    localStorage.setItem("userId", user_id);

    const _user = JSON.parse(JSON.stringify(DefaultUser));
    _user.user_id = _result.items.user_id;
    _user.connected = _result.items.connected;
    _user.username = _result.items.username;
    _user.score = _result.items.score;
    if (_result.items.avatar) {
      _user.avatar = `${import.meta.env.VITE_UPLOAD_PATH}/${
        import.meta.env.VITE_UPLOAD_FOLDER
      }/users/${_result.items.user_id}.webp`;
    }

    return {
      code: 200,
      user: _user,
      alert: {
        open: true,
        message: "login-success",
        severity: StatusTypeEnum.Success,
      },
    };
  } else {
    return {
      code: _result.code,
      user: DefaultUser,
      alert: {
        open: true,
        message: "login-failed",
        severity: StatusTypeEnum.Error,
      },
    };
  }
};

const Logout = async () => {
  localStorage.removeItem("userId");

  let _result = await PostAuthApi({}, "admin/logout");
  let _alert: any = {
    open: true,
    message: _result.code === 200 ? "logout-success" : "logout-failed",
    severity:
      _result.code === 200 ? StatusTypeEnum.Warning : StatusTypeEnum.Error,
  };

  return {
    ..._result,
    user: DefaultUser,
    alert: _alert,
  };
};

export { SendCode, Login, Logout };
