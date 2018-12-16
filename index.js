const breakOut = (array, changeValue, stopValue) => {
  array.forEach((element, index, array) => {
    if (element === stopValue) {
      break
    }
    array[index] = changeValue;
  });

  return array;
};


a = ["a", "b", "c", "d", "e"];
console.log(breakOut(a, "f", "c"));
