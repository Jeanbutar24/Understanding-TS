function add(n1: number, n2: number, showresult: boolean) {
  if (showresult) {
    return n1 + n2;
  }
}

const number1 = 12.8;
const number2 = 8;

// const printResult: boolean = true;
// const result = add(number1, number2, printResult);
// console.log(result);
let admin1 = 'admin';
let Read_only = true;
let Author = 'jean';
enum Role {
  admin,
  Read_only,
  Author,
}
const person = {
  admin: Role.admin,
};

// define our Tuples

let ourTuples: readonly [number, boolean, string];

// initialize correctly
ourTuples = [2, false, 'jean'];

// object types

const car: { type: string; model: string; year: number } = {
  type: 'toyota',
  model: 'avanza 2g',
  year: 4000,
};
car.type = 'mitshubishi';

// object with optional

const car2: { type: string; mileage?: number } = {
  type: 'Toyota',
};

car2.mileage = 2000;

const obj = {
  funtion: (params: string) => {
    return 'Jean ' + params;
  },
};

// console.log(obj.funtion('Suka mega'));

// ts aliases & interfaces
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  car: CarType;
  model: CarModel;
};

const carobj: Car = {
  car: 'Toyota',
  year: 2034,
  model: 'jean',
};

interface Rectangle {
  // interface only apply to object
  height: number;
  width: number;
}

interface colorRectangle extends Rectangle {
  color: string;
}

const carInterface: colorRectangle = {
  height: 0,
  width: 0,
  color: 'red',
};

// TypeScript Union Types

function unionParams(code: string | boolean | number) {
  return code;
}

// console.log(unionParams('jean'));

// function
function getTime(): number {
  // this function must returns a number
  return new Date().getTime();
}

function printHello(): void {
  // void used for the function doesn't return any value
  console.log('Hello!');
}

// default parameters
function pow(value: number = 10): number {
  return value;
}
console.log(pow());

// literal types
