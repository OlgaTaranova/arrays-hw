// Задача 4

let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-Ролл");
console.log(styles);
styles.splice(styles.length - 2, 1, "Классика");
console.log(styles);
alert(styles.splice(0, 1));
console.log(styles);
styles.splice(0, 0, "Рэп", "Регги");
console.log(styles);

// Задача 1

let arr = ["mama", "gaga", "baba", "blabla", "commited"];
let newArr = arr.map(item => {
  return item.length;
});
console.log(newArr);

// Задача 2

let arr = ["Anna", 12, "Sam", 9, "Kate", 10, "Ron", 9];

arr.forEach(item => {
  if (typeof item === 'string') console.log(item);
});

arr.forEach(item => {
  if (typeof item === 'number') console.log(item);
});

// Задача 3

let arr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let newArr = arr.filter(item => {
  return item > 10;
});
console.log(newArr);

// Калькулятор

let arr =[];
let num;

do {
  num = prompt('Enter a number. If you want to see the result enter 15');
  if (num === null) {
    break;
  } else if (num == '15') {
    let sum = arr.reduce((sum, item) => {
    return sum + item;
  }, 0);
    alert(sum);
  } else if (isNaN(+num)) {
    continue;
  } 
  else {
  arr.push(+num);
}
} while (num != '15');
console.log(arr);