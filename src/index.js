import trim from 'lodash/trim';

/* eslint-disable quotes, max-len */
const CJK_REGEX = /[⺀-\u2efe\u3000-〾\u3040-ゞ゠-ヾ㇀-\u31eeㇰ-ㇾ㈀-㋾㌀-㏾㐀-\u4dbe一-\u9ffe豈-\ufafe︰-﹎]|[\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud82c[\udc00-\udcfe]|\ud869[\udc00-\udede\udf00-\udfff]|\ud86d[\udc00-\udf3e\udf40-\udfff]|\ud86e[\udc00-\udc1e]|\ud87e[\udc00-\ude1e]/;
/* eslint-enable */

export const FIRST_LAST = 1;
export const LAST_FIRST = 2;

function isValidString(value) {
  return typeof value === 'string' && value.length;
}

export default (firstName, lastName, sortOrder = FIRST_LAST) => {
  // if some of values are not defined
  const isFirstNameValid = isValidString(firstName);
  const isLastNameValid = isValidString(lastName);
  if (isFirstNameValid) {
    if (!isLastNameValid) {
      return trim(firstName);
    }
  } else {
    if (isLastNameValid) {
      return trim(lastName);
    }
    return '';
  }

  // both values are defined
  const endOfFirstNameIsCJK = CJK_REGEX.test(firstName[firstName.length - 1]);
  const beginOfLastNameIsCJK = CJK_REGEX.test(lastName[0]);
  if (endOfFirstNameIsCJK) {
    if (beginOfLastNameIsCJK) {
      return trim(lastName) + trim(firstName);
    }
    return firstName + lastName;
  }
  if (beginOfLastNameIsCJK) {
    return trim(lastName) + trim(firstName);
  }
  return sortOrder === FIRST_LAST
    ? `${trim(firstName)} ${trim(lastName)}`
    : `${trim(lastName)} ${trim(firstName)}`;
};
