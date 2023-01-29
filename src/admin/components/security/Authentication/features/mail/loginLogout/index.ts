import { DefaultUser } from "../../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../../core/libs";

const Login = async (user_id: string) => {
  let _result: any = await PostAuthApi({ user_id: user_id }, "admin/login");

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

    return { user: _user };
  } else {
    return {
      user: DefaultUser,
      alert: {
        open: true,
        message: "LoginFailed",
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
    message: _result.code === 200 ? "LogoutSuccess" : "LogoutFailed",
    severity:
      _result.code === 200 ? StatusTypeEnum.Warning : StatusTypeEnum.Error,
  };

  return {
    ..._result,
    user: DefaultUser,
    alert: _alert,
  };
};

export { Login, Logout };
