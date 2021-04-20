// parse string like "response-time-greater-than-200-ms" and return the time in ms
export const parseAlertStringTime = (str: string): number => {
  // match any string that ends with digits followed by unit 's' or 'ms'
  const match = str.match(/(\d+)-(m?s)$/);
  if (!match) {
    throw new Error('alert string does not contain valid time number');
  }

  const number = Number(match[1]);
  const unit = match[2];

  if (unit === 's') return number * 1000;
  return number;
};
