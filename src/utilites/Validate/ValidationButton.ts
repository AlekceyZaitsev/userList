const yearsUser: number = 17;
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
    newAgeUser.length > maxLengthAgeUser ||
    !newAgeUser.match("^[0-9]+$") ||
    Number(newAgeUser) <= yearsUser
  ) {
    return true;
  }

  return false;
};

export default validateErrorsForButton;
