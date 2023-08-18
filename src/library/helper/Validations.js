import { AppConstants } from "../constants";

const validationFunctions = {
  [AppConstants.EMAIL]: (data) => data && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.trim()),
  [AppConstants.REQUIRED]: (data) => data && data.length && data.trim().length,
  [AppConstants.DATE_REQUIRED]: (data) => !!data,
  [AppConstants.PASSWORD]: (data) => data && data.length && data.trim().length >= 4,
  [AppConstants.IMAGE_REQUIRED]: (data) => !!data,
  [AppConstants.NUMBER]: (data) => /^\d+$/.test(data),
  [AppConstants.NUMBERLENGTH]: (data) => data && data.length === 10,
  [AppConstants.PHONENUMBER]: (data) => data && /^\d+$/.test(data),
  [AppConstants.NUMBERLENGTH_6]: (data) => data && data.length === 6,
  [AppConstants.FLOAT_NUMBER]: (data) => data && !isNaN(data),
  [AppConstants.USERNAME]: (data) => data && /^\S+$/.test(data),
  [AppConstants.ISNOTNULL]: (data) => !!data,
};

export const validateKey = (data, key) => {
  const validationFn = validationFunctions[key] || (() => true);
  return validationFn(data);
};

export const validateData = (data, keys = []) =>
  keys.reduce((validationObj, { key, type, message }) => {
    if (!validateKey(data[key], type)) {
      if (!validationObj[key]) validationObj[key] = {
        valid: false,
        message,
      };
    }
    return validationObj;
  }, {});
