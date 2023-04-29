function getEqualCompare<T>(
  a: T extends any[] ? "Cant pass array" : T,
  b: T extends any[] ? "Cant pass array" : T
) {
  return a === b;
}
getEqualCompare(6, 5);
