// Строгий режим
"use script";

// ! MIN
// * Task 1

// * Task 2
const firstName = "Yurii";
const secondName = "Kondryk";
let age;
let phone;
let country = null;
let email = "";
// let 1name;
// let let = '';
// let first-name;
// let город;

// * Task 3
// Однострочный коментарий
/* Многострочный 
коментарий*/
let comment; //можно и так =)

// * Task 4
let firstType;
let second_type;
let $third_type;
let FOURTH_TYPE;

// ! NORMAL
// * Task 1
let yourName = null;
yourName = prompt("Как тебя зовут ?");
alert(`Привет, ${yourName} !`);

// * Task 2
const YEAR = 2022;
let year_of_birth = null;
let your_age = null;
year_of_birth = prompt("Какой год твоего рождения ?");
your_age = YEAR - year_of_birth;
alert(`Тебе ${your_age} !`);

// * Task 3
let side_square = null;
let perimeter = null;
side_square = prompt("Напиши длинну стороны квадрата и я посчитаю его периметр =)");
perimeter = side_square * 4;
alert(`Периметр квадрата равен: ${perimeter} !`);

// ! MAX
// * Task 1
let circle_radius;
let square_circle;
circle_radius = prompt("Напиши радиус круга и я посчитаю его площадь (в см):");
square_circle = Math.PI * Math.pow(circle_radius, 2);
square_circle = square_circle.toFixed(2);
alert(`Площадь круга равна: ${square_circle} см2 !`);

// * Task 2
let distance;
let hours;
let speed;
distance = prompt("Напиши растояние между городами (в километрах):");
hours = prompt("Напиши время за которое хочешь доехать (в часах):");
speed = distance / hours;
speed = Math.ceil(speed);
alert(`Тебе нужно ехать со скоростью: ${speed} км/час !`);

// * Task 3
const RATE = 32.09;
let euro;
let sum;
euro = prompt("Сколько у тебя есть евро ?");
sum = euro * RATE;
sum = sum.toFixed(2);
alert(`У тебя есть ${sum} грн!`);
