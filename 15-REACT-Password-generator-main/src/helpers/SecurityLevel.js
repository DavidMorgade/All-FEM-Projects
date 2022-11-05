const SecurityLevel = (length, uppercase, lowercase, numbers, symbols) => {
  if (!uppercase && !lowercase && !numbers && !symbols) return false;
  if (uppercase && lowercase && numbers && symbols && length >= 10)
    return '#A4FFAF';
  if (symbols && length >= 15) return '#A4FFAF';
  if (uppercase && lowercase && numbers && symbols && length >= 5)
    return '#F8CD65';
  if (uppercase && lowercase && numbers && symbols && length >= 5)
    if (length >= 10 && (uppercase || lowercase || numbers || symbols))
      return '#F8CD65';
  if (length >= 15 && uppercase && lowercase && (numbers || symbols))
    return '#A4FFAF';
  if (length >= 15 && numbers && symbols && (lowercase || uppercase))
    return '#A4FFAF';
  if (length >= 10 && (uppercase || lowercase || numbers || symbols))
    return '#F8CD65';
  if (
    length < 10 &&
    length > 5 &&
    (uppercase || lowercase || numbers || symbols)
  )
    return '#FB7C58';
  if (length >= 10) return '#FB7C58';
  if (length < 10) return '#F64A4A';
};

export default SecurityLevel;
