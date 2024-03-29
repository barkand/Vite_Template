const PostAuth = async (params: any, route: string) => {
  let _result = await fetch(`${import.meta.env.VITE_SERVER_PATH}/api/${route}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ params }),
  })
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code, message: _result.message, items: _result.data };
};

const Post = async (params: any, route: string) => {
  let _result = await fetch(`${import.meta.env.VITE_SERVER_PATH}/api/${route}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ params }),
  })
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code, message: _result.message, items: _result.data };
};

const Upload = async (params: any, route: string) => {
  let _result = await fetch(`${import.meta.env.VITE_SERVER_PATH}/api/${route}`, {
    method: "POST",
    credentials: "include",
    body: params.picture,
  })
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code, message: _result.message };
};

export { PostAuth, Post, Upload };
