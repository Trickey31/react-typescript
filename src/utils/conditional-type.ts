interface Student {
  name: string;
  age: number;
  updateName: () => void;
}
type OptionsFlags<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];
type myStudent = OptionsFlags<Student>;

type myNonNullAble<Type> = Type extends null | undefined ? never : Type;
type testMyNonNullAble = myNonNullAble<string | null | undefined>;
