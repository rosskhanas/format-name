import trim from 'lodash/trim';

/* eslint-disable quotes, max-len */
const CJK_REGEX = /[⺀-\u2efe\u3000-〾\u3040-ゞ゠-ヾ㇀-\u31eeㇰ-ㇾ㈀-㋾㌀-㏾㐀-\u4dbe一-\u9ffe豈-\ufafe︰-﹎]|[\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud82c[\udc00-\udcfe]|\ud869[\udc00-\udede\udf00-\udfff]|\ud86d[\udc00-\udf3e\udf40-\udfff]|\ud86e[\udc00-\udc1e]|\ud87e[\udc00-\ude1e]/;
/* eslint-enable */

export const FIRST_LAST = 1;
export const LAST_FIRST = 2;

function isStringValid(value) {
  return typeof value === 'string' && value.length;
}

export function isCJKFullName(name, surname) {
  const nameTrimmed = trim(name);
  const surnameTrimmed = trim(surname);
  const isNameValid = isStringValid(name);
  const isSurnameValid = isStringValid(surname);
  if (!isNameValid || !isSurnameValid) {
    return false;
  }
  const endOfNameIsCJK = CJK_REGEX.test(nameTrimmed[nameTrimmed.length - 1]);
  const beginOfSurnameIsCJK = CJK_REGEX.test(surnameTrimmed[0]);
  if (beginOfSurnameIsCJK || endOfNameIsCJK) {
    return true;
  }
  return false;
}

export default (name, surname, sortOrder = FIRST_LAST) => {
  const nameTrimmed = trim(name);
  const surnameTrimmed = trim(surname);
  // Some of names are not defined.
  const isNameValid = isStringValid(name);
  const isSurnameValid = isStringValid(surname);
  if (isNameValid && !isSurnameValid) {
    return nameTrimmed;
  }
  if (!isNameValid && isSurnameValid) {
    return surnameTrimmed;
  }
  if (!isNameValid && !isSurnameValid) {
    return '';
  }
  // Both name and surnames are defined.
  const endOfNameIsCJK = CJK_REGEX.test(nameTrimmed[nameTrimmed.length - 1]);
  const beginOfSurnameIsCJK = CJK_REGEX.test(surnameTrimmed[0]);
  if (beginOfSurnameIsCJK) {
    return surnameTrimmed + nameTrimmed;
  }
  if (endOfNameIsCJK) {
    return nameTrimmed + surnameTrimmed;
  }
  return sortOrder === FIRST_LAST
    ? `${nameTrimmed} ${surnameTrimmed}`
    : `${surnameTrimmed} ${nameTrimmed}`;
};
