const arrayColors = [
  "rojo",
  "blanco",
  "azul",
  "verde",
  "amarillo",
  "rojo",
  "verde",
];
const valuesToSearch = ["rojo", "amarillo", "verde"];

const vaidateInclude = (arrayContent, valueSeach) => {
  let duplicated = 0;

  arrayContent.forEach((element) => {
    if (valueSeach.includes(element)) duplicated += 1;

    console.log(duplicated);
  });
};

const result = valuesToSearch.filter(
  (arrayColors) => valuesToSearch.length >= 0
);
console.log(result);

vaidateInclude(arrayColors, valuesToSearch);
