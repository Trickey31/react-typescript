const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};

function getDeepValue<T, FK extends keyof T, SK extends keyof T[FK]>(
  obj: T,
  firstKey: FK,
  secondKey: SK
) {
  return obj[firstKey][secondKey];
}

console.log(getDeepValue(obj, "foo", "a"));
