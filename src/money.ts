export type Line = { amount: number };

// ISO 4217 currencies that use 3 decimal places (mostly Middle Eastern dinars/rial).
const THREE_DECIMAL_CURRENCIES = new Set([
  'BHD', // Bahraini Dinar
  'IQD', // Iraqi Dinar
  'JOD', // Jordanian Dinar
  'KWD', // Kuwaiti Dinar
  'LYD', // Libyan Dinar
  'OMR', // Omani Rial
  'TND', // Tunisian Dinar
]);

// ISO 4217 currencies that use 0 decimal places.
const ZERO_DECIMAL_CURRENCIES = new Set([
  'BIF', // Burundian Franc
  'CLP', // Chilean Peso
  'DJF', // Djiboutian Franc
  'GNF', // Guinean Franc
  'ISK', // Icelandic Króna
  'JPY', // Japanese Yen
  'KMF', // Comorian Franc
  'KRW', // South Korean Won
  'PYG', // Paraguayan Guaraní
  'RWF', // Rwandan Franc
  'UGX', // Ugandan Shilling
  'UYI', // Uruguay Peso en Unidades Indexadas (UI)
  'VND', // Vietnamese Đồng
  'VUV', // Vanuatu Vatu
  'XAF', // Central African CFA Franc
  'XOF', // West African CFA Franc
  'XPF', // CFP Franc
]);

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const upper = currency.toUpperCase();
  let decimals: number;
  if (THREE_DECIMAL_CURRENCIES.has(upper)) {
    decimals = 3;
  } else if (ZERO_DECIMAL_CURRENCIES.has(upper)) {
    decimals = 0;
  } else {
    decimals = 2;
  }
  return sum.toFixed(decimals);
}
