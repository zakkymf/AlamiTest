export const formatCurrency = (nominal: any, currency = 'Rp', separator = '.') => {
  if (isNaN(nominal)) {
    nominal = '';
  }

  if (nominal || nominal === '' || nominal === 0) {
    return currency + nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  return '';
};
