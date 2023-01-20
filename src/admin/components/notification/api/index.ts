const SaveNotification = async (notify: any) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/save_notify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ notify }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code };
};

const DeleteNotification = async (item_id: number) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/delete_notify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ item_id }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code };
};

const GetNotification = async () => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/get_notifications`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code, items: _result.data };
};

const SeenNotification = async (item_id: number) => {
  let _result: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/seen_notify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ item_id }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: _result.code };
};

export {
  GetNotification,
  SaveNotification,
  SeenNotification,
  DeleteNotification,
};
