const breakOut = (array, changeValue, stopValue) => {
  for(let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  };

  return array;
};


a = ["a", "b", "c", "d", "e"];
console.log(breakOut(a, "f", "c"));
