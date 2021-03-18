'use strict';

// Циклы


// 1)

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
} 

// 2)

let num2 = 50;

do {
  console.log(num2);
  num2++;
}
while (num2 < 55);

// 3)

// переменная i - сокращённо от итератор


for (let i = 1; i < 8; i++) {
  console.log(i);
}

let num3 = 50;
for (let i = 1; i < 8; i++) {
  console.log(num3);
  num3++;
}

// break; остановит условие в цикле, когда будет нужный резултат

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

// continue; пропустит значеие, которому соответствует и пойдёт дальше

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}