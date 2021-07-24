const CJK_REGEX = /[⺀-\u2efe\u3000-〾\u3040-ゞ゠-ヾ㇀-\u31eeㇰ-ㇾ㈀-㋾㌀-㏾㐀-\u4dbe一-\u9ffe豈-\ufafe︰-﹎]|[\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud82c[\udc00-\udcfe]|\ud869[\udc00-\udede\udf00-\udfff]|\ud86d[\udc00-\udf3e\udf40-\udfff]|\ud86e[\udc00-\udc1e]|\ud87e[\udc00-\ude1e]/;

function isString(value) {
  return typeof value === "string";
}

function isStringAndNotEmpty(value) {
  return isString(value) && value.length;
}

function isCJKFullName(firstName, lastName) {
  const isFirstNameValid = isStringAndNotEmpty(firstName);
  const isLastNameValid = isStringAndNotEmpty(lastName);
  if (!isFirstNameValid || !isLastNameValid) {
    return false;
  }
  const firstNameTrimmed = isString(firstName) ? firstName.trim() : "";
  const lastNameTrimmed = isString(lastName) ? lastName.trim() : "";
  const endOfFirstNameIsCJK = CJK_REGEX.test(firstNameTrimmed[firstNameTrimmed.length - 1]);
  const beginOfLastNameIsCJK = CJK_REGEX.test(lastNameTrimmed[0]);
  if (beginOfLastNameIsCJK || endOfFirstNameIsCJK) {
    return true;
  }
  return false;
}

const formatName = (firstName, lastName) => {
  const firstNameTrimmed = isString(firstName) ? firstName.trim() : "";
  const lastNameTrimmed = isString(lastName) ? lastName.trim() : "";
  const isFirstNameValid = isStringAndNotEmpty(firstName);
  const isLastNameValid = isStringAndNotEmpty(lastName);
  if (isFirstNameValid && !isLastNameValid) {
    return firstNameTrimmed;
  }
  if (!isFirstNameValid && isLastNameValid) {
    return lastNameTrimmed;
  }
  if (!isFirstNameValid && !isLastNameValid) {
    return "";
  }
  // Both first name and last names are defined.
  const endOfFirstNameIsCJK = CJK_REGEX.test(firstNameTrimmed[firstNameTrimmed.length - 1]);
  const beginOfLastNameIsCJK = CJK_REGEX.test(lastNameTrimmed[0]);
  if (beginOfLastNameIsCJK) {
    return lastNameTrimmed + firstNameTrimmed;
  }
  if (endOfFirstNameIsCJK) {
    return firstNameTrimmed + lastNameTrimmed;
  }
  return `${firstNameTrimmed} ${lastNameTrimmed}`;
};

module.exports = formatName;
module.exports.isCJKFullName = isCJKFullName;
