export const roundOff = (
  value: number,
  decimals: number = 2
): number | 0 => {
  if (
    typeof value !== 'number' || 
    typeof decimals !== 'number' ||
    isNaN(value)
  ) {
    return 0;
  }

  return Number(value.toFixed(decimals));
};
