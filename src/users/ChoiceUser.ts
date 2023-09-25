import { dispatchFunction, usersType } from "../interfaces/interface";

export const ChoiceUser = <
  N extends number,
  A extends usersType[],
  F extends dispatchFunction<usersType[]>
>(
  id: N,
  array: A,
  fc: F
) => {
  const changeListItem = array.map((item: usersType) =>
    item.id === id ? { ...item, choices: !item.choices } : item
  );
  fc(changeListItem);
  localStorage.setItem("list", JSON.stringify(changeListItem));
};
