const breakOut = (array, changeValue, stopValue) => {
  array.forEach((element, index, array) => {
    if (element === stopValue) break;
    array[index] = changeValue;
  });
  return array;
};
