type Student = { name: string; age: number; major: string };
const kim: Student = { name: "하빈", age: 22, major: "물리학과" };

const list1: Student[] = [
  { name: "명수", age: 23, major: "미대생" },
  { name: "재석", age: 25, major: "의대생" },
];

type Coffee = { name: string; shot: number; ingredient: string[] };
const coffeelist: Coffee[] = [
  { name: "아이스라떼", shot: 1, ingredient: ["에스프레소", "우유", "얼음"] },
  {
    name: "헤이즐넛아메리카노",
    shot: 2,
    ingredient: ["에스프레소", "헤이즐럽시럽", "물"],
  },
];

type Person = { name: string; age: number };
type University = { major: string; studentId: string };
type PartTime = { place: string; wage: number };

const song: Person & University = {
  name: "송유빈",
  age: 24,
  major: "컴퓨터공학과",
  studentId: "20181111",
};

const Lee: Person & PartTime = {
  name: "이름",
  age: 22,
  place: "캔모아부평",
  wage: 1500000,
};

type Hamburger = { hamburgerName: string; hamburgerKcal: number };
type SideMenu = { sideName: string; sideKcal: number };
type Drink = { drinkName: string; drinkKcal: number };

const guest1: Hamburger = {
  hamburgerName: "상하이버거",
  hamburgerKcal: 400,
};

const guest2: Hamburger & Drink = {
  hamburgerName: "치즈버거",
  hamburgerKcal: 300,
  drinkName: "제로콜라",
  drinkKcal: 0,
};
