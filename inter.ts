// union(|) : 또는[or] 개념
const a: string | number = "1";
const b: string | string[] = ["a", "b"];
const c: { name: string; age: string | number } = {
  name: "철수",
  age: 22,
};

const d: { korName: string } | { engName: string } = { engName: "kim" };

// Intersection(&) : 그리고[and] 개념
const a1: { name: string } & { age: number } = { name: "이유미", age: 22 };
