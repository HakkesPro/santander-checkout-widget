// A mock function to mimic making an async request for data
// eslint-disable-next-line import/prefer-default-export
export const fetchCount = (amount = 1):Promise<{ data: number }> => {
  const obj = { data: amount };
  return new Promise((resolve) => setTimeout(() => resolve(obj), 500));
};
