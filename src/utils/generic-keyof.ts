const devices = [
  {
    name: "Iphone",
    price: 1000,
  },
  {
    name: "Ipad",
    price: 2000,
  },
  {
    name: "Macbook",
    price: 3000,
  },
];
function getDevicesKey<DataKey, Key extends keyof DataKey>(
  items: DataKey[],
  key: Key
): DataKey[Key][] {
  return items.map((item) => item[key]);
}

console.log(getDevicesKey(devices, "name"));
console.log(getDevicesKey(devices, "price"));
