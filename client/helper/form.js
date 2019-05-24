export function normalizePhone(phone) {
  if (!phone) return phone;

  const onlyNums = phone.replace(/[^\d]/g, '');

  if (onlyNums.length <= 2) return onlyNums;
  if (onlyNums.length <= 6) {
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 6)}`;
  }

  return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
}

export default null;
