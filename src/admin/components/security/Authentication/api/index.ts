const GetUser = async () => {
  let _result = await fetch(`${import.meta.env.VITE_SERVER_PATH}admin/user`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((d) => d.data);

  let _avatar = "";
  if (_result && _result.avatar) {
    _avatar = `${import.meta.env.VITE_UPLOAD_PATH}/${
      import.meta.env.VITE_UPLOAD_FOLDER
    }/users/${_result?.wallet}.webp`;
  }

  return {
    name: _result?.username,
    avatar: _avatar,
    score: _result?.score ?? 0,
  };
};

export { GetUser };
