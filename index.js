let myEach = function (collection, callback) {

  let col = getArray(collection);

  for (const e of col) {
    callback(e);

  }
  return collection;
}

let myMap = function (collection, callback) {

  let col = getArray(collection);

  let newArr = [];
  for (const e of col) {
    newArr.push(callback(e));

  }
  return newArr;
}

let myReduce = function (collection, callback, acc) {
  let col = getArray(collection);

  let currentVal;
  if (acc) {
    currentVal = acc;
    for (const e of col) {
      currentVal = callback(currentVal, e, col);
    }
  }
  else {
    currentVal = col[0];
    for (const e of col.slice(1)) {
      currentVal = callback(currentVal, e, col);
    }
  }
  return currentVal;
}

let myFind = function (collection, predicate) {
  let col = getArray(collection);

  let trueVal;
  for (const e of col) {
    if (predicate(e)) {
      trueVal = e;
      break;
    }

  }
  return trueVal;
}

let myFilter = function (collection, predicate) {

  let col = getArray(collection);

  let newArr = [];
  for (const e of col) {
    if (predicate(e)) {
      newArr.push(e);
    }
  }

  return newArr;
}

let mySize = function (collection) {
  let col = getArray(collection);

  return col.length;
}

let myFirst = function (arr, n) {
  if (n) {
    return arr.slice(0, n);
  }
  else {
    return arr[0];
  }
}

let myLast = function (arr, n) {
  if (n) {
    return arr.slice(-n);
  }
  else {
    return arr.slice(-1)[0];
  }
}

let myKeys = function (object) {
  return Object.keys(object);
}

let myValues = function (object) {
  return Object.values(object);
}















//------------------------------------------------------------//
function getArray(collection) {
  let col;
  if (Array.isArray(collection)) {
    col = collection;
  }
  else {
    col = Object.values(collection);
  }

  return col;
}