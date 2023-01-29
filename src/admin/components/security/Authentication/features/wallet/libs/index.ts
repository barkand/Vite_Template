const shortUser = () => {
  let userId: any = localStorage.getItem("userId");
  return (
    userId.substr(0, 12) +
    "..." +
    userId.substr(userId.length - 13, userId.length)
  );
};

export { shortUser };
