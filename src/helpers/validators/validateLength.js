export const validateLength = (value, maxLength, minLength = 0) => {
  return value.length >= minLength && value.length <= maxLength;
};
