import { dispatchFunction, usersType } from "../interfaces/interface";

export const createNewUser = <
  T extends string,
  B extends boolean,
  K extends usersType[],
  U extends dispatchFunction<usersType[]>
>(
  storage: K,
  changeStorage: U,
  name: T,
  age: T,
  choices: B,
  subscribed: T,
  isEmployed: T
) => {
  const newUser: usersType = {
    id: Date.now(),
    name,
    age,
    choices,
    subscription: subscribed,
    employment: isEmployed,
  };

  changeStorage([...storage, newUser]);
};
