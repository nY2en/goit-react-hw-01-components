export const addComa = value => {
  const sth = value.toString().split('');
  sth.splice(1, 0, ',');
  sth.join('');
  return sth;
};
