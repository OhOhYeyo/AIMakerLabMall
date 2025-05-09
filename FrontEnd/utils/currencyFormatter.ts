export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(amount);
};

export const parseFormattedCurrency = (formatted: string): number => {
  return parseInt(formatted.replace(/[^0-9-]/g, ''));
};
