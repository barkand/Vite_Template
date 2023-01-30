const shortUser = () => {
  let userId: any = localStorage.getItem("userId");
  return userId;
};

export { shortUser };
