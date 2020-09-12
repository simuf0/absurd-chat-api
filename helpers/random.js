module.exports = {
  oneOf: oneOf,
  isOneOf: isOneOf,
};

function oneOf(collection) {
  if (typeof collection == "number") {
    return Math.round(Math.random() * (collection - 1));
  } else {
    const index = Math.round(Math.random() * (collection.length - 1));
    return collection[index];
  }
}

function isOneOf(size) {
  return (oneOf(size) + 1) % size == 0;
}