var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, item){
<<<<<<< HEAD
  return [item, ...array];
=======
  var newArray = array;
  newArray.unshift(item);
  return newArray;
>>>>>>> 91767764b2c8bfc246f5f3c88cd7b0b6b9a22fbc
}

function destructivelyAddElementToBeginningOfArray(array, item){
  array.unshift(item);
  return array;
}

function addElementToEndOfArray(array, item){
<<<<<<< HEAD
 return [...array, item];
=======
  var newArray = array;
  newArray.push(item);
  return newArray;
>>>>>>> 91767764b2c8bfc246f5f3c88cd7b0b6b9a22fbc
}

function destructivelyAddElementToEndOfArray(array, item){
  array.push(item);
<<<<<<< HEAD
  return array;
=======
>>>>>>> 91767764b2c8bfc246f5f3c88cd7b0b6b9a22fbc
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
 return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
<<<<<<< HEAD
  array.pop();
  return array;
=======
  return array.pop();
>>>>>>> 91767764b2c8bfc246f5f3c88cd7b0b6b9a22fbc
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
