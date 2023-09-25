const validateErrorsForButton = (
  newNameUser: string,
  newAgeUser: string,
  maxLengthNameUser: number,
  maxLengthAgeUser: number
) => {
  if (
    !newNameUser.trim() ||
    !newNameUser.length ||
    newNameUser.length > maxLengthNameUser
  ) {
    return true;
  }

  if (
    !newAgeUser.trim() ||
    !newAgeUser.length ||
    newAgeUser.length > maxLengthAgeUser
  ) {
    return true;
  }

  return false;
};

export default validateErrorsForButton;
