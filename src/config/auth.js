export const onAuth = () => {
  if (localStorage.getItem('user')) {
    return true;
  }
  return false;
};
