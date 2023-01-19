const UploadAvatar = async (file: any) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/upload`,
    {
      method: "POST",
      credentials: "include",
      body: file,
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code };
};

const UpdateUsername = async (username: string) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/update_user`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: username,
      }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code, user: _result.data };
};

export { UploadAvatar, UpdateUsername };
