function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
filterByRating(books);
console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
}

console.log(concatenateArrays(["a", "b"], ["c"]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, public model: string) {
    super(make, year);
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(processValue("hello"));
console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let expensiveProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > expensiveProduct.price) {
      expensiveProduct = products[i];
    }
  }
  return expensiveProduct;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Friday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (n < 0) {
        rej("the number is negative");
      } else {
        res(n * n);
      }
    }, 1000);
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
