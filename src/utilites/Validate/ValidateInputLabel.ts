export const validateInputLabel = (
  data: string,
  size: number,
  mainText: string
) => {
  if (data.length > size) {
    return "Достигнут лимит по символам";
  }

  if (!data.length) {
    return "Обязательное поле*";
  }

  if (mainText === "Age") {
    if (!data.match("^[0-9]+$")) {
      return "Только цифры";
    }
    if (Number(data) <= 17) {
      return "Доступно с 18 лет";
    }
  }
  return mainText;
};
