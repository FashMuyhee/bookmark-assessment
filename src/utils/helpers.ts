/**
 * create alpha-numeric uid
 */
export const uid = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
