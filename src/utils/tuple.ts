export function simpleUseState(
  initialValue: string
): [string, (newValue: string) => void] {
  return [
    initialValue,
    (newValue: string) => {
      initialValue = newValue;
    },
  ];
}

const [val, setVal] = simpleUseState("Trickey");
console.log(val);
setVal("Tien Thanh");
console.log(val);
