module.exports = {
  oneOf: oneOf,
};

function oneOf(collection) {
  const index = Math.round(Math.random() * (collection.length - 1));
  return collection[index];
}