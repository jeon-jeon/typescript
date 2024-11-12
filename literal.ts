type Kimbab = "치즈김밥" | "일반김밥" | "참치김밥";
type MainColor = "#485475" | "#485472" | "#485478";

const kimbab: Kimbab = "참치김밥";
const color: MainColor = "#485475";

type Bread = "화이트" | "하티" | "파마산" | "위트" | "허니오트" | "플랫브래드";
type Cheese = "아메리칸" | "슈레드" | "모짜렐라";
type Topping =
  | "토마토"
  | "올리브"
  | "아보카도"
  | "양상추"
  | "양파"
  | "계란"
  | "피망";
type Source =
  | "마요네즈"
  | "머스타드"
  | "사우스웨스트"
  | "허니머스타드"
  | "후추";

type Sandwich = {
  bread: Bread;
  cheese: Cheese;
  topping: Topping[];
  source1: Source;
  source2: Source;
};
type Cookie = {
  cookieName: "더블 초코칩" | "오트밀" | "라즈베리" | "마카다미아";
};
type Drink1 = { drinkName: "콜라" | "사이다" | "제로콜라" | "탄산수" };

const comboSet: Sandwich & Cookie & Drink1 = {
  bread: "플랫브래드",
  cheese: "모짜렐라",
  topping: ["양상추", "계란", "아보카도", "토마토", "피망"],
  source1: "허니머스타드",
  source2: "사우스웨스트",
  cookieName: "더블 초코칩",
  drinkName: "탄산수",
};
