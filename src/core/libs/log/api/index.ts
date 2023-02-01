const SendLogs = async (type: string, message: string) => {
  await fetch(`${import.meta.env.VITE_API_PATH}log/client`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ type, message }),
  })
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return { code: 500 };
    });

  return { code: 200 };
};

export default SendLogs;
