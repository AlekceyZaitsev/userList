import { dispatchFunction, usersType } from "../interfaces/interface";

export const DeleteUser = <
  T extends usersType[],
  K extends dispatchFunction<usersType[]>
>(
  array: T,
  fc: K
) => {
  const listItems = array.filter((item: usersType) => !item.choices);
  fc(listItems);
  localStorage.setItem("list", JSON.stringify(listItems));
};
