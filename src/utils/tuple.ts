export function simpleUseState(
  value: string
): [() => string, (newValue: string) => void] {
  return [
    () => value,
    (newValue: string) => {
      value = newValue;
    },
  ];
}

const [getter, setter] = simpleUseState("Trickey");
console.log(getter());
setter("Tien Thanh");
console.log(getter());
