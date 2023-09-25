import { colorChoiceTableItems } from "../ThemeApp/style";

export const styleTableWidth = {
  minWidth: 650,
};

export const styleTableRow = (theme: string, item: boolean) => {
  return {
    "& .MuiTableCell-root": {
      backgroundColor: colorChoiceTableItems(theme, item),
    },
  };
};
