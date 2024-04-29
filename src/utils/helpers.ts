/**
 * create alpha-numeric uid
 */
export const uid = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/**
 * @param  value
 * @returns formatted money value in naira
 */

export const figureFormat = (value: number | string, showNaira: boolean = true) => {
  const moneyValue = typeof value === 'number' ? value : parseFloat(value);
  const money = isNaN(moneyValue) ? 0 : moneyValue;
  const formatted = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return !showNaira ? `${formatted}` : `₦${formatted}`;
};
