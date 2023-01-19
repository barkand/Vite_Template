const SaveNotification = async (product: string) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/save_notify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        product: product,
      }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code };
};

const DeleteNotification = async (product: string) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/delete_notify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        product: product,
      }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code };
};

const GetNotification = async (lang: string) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/get_notifications`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        lang: lang,
      }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code, items: _result.data };
};

export { SaveNotification, DeleteNotification, GetNotification };
