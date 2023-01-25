const PostAuth = async (params: any, route: string) => {
  let _result = await fetch(`${import.meta.env.VITE_SERVER_PATH}${route}`, {
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

  return { code: 200, status: _result.message, items: _result.data };
};

const Post = async (params: any, route: string) => {
  let _result = await fetch(`${import.meta.env.VITE_SERVER_PATH}${route}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ params }),
  })
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: 200, status: _result.message, items: _result.data };
};

export { PostAuth, Post };
