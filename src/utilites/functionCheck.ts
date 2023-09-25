export const toggle = <T extends string>(
  changeFunction: { (value: T): void },
  parameterForCheck: T,
  parameterOne: T,
  parameterTwo: T
) => {
  return changeFunction(
    parameterForCheck === parameterOne ? parameterTwo : parameterOne
  );
};
