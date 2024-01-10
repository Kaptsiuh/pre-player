// const titleElement = document.createElement("h1");
// titleElement.append("Hello my dear!");
// document.body.append(titleElement);

// const techSelectElement = document.createElement("select");
// const techSelectOption0Element = document.createElement("option");
// techSelectOption0Element.value = 1;
// techSelectOption0Element.append("JS");
// techSelectElement.append(techSelectOption0Element);

// const techSelectOption1Element = document.createElement("option");
// techSelectOption1Element.value = 2;
// techSelectOption1Element.append("HTML");
// techSelectElement.append(techSelectOption1Element);

// document.body.append(techSelectElement);

// const title = "incubator";
// const graduatesCount = 2000;
// const areYouReady = true;

// let pageTitleElement = document.createElement("h1");
// pageTitleElement.innerText = title;
// document.body.append(pageTitleElement);

// let graduatesCountElement = document.createElement("input");
// graduatesCountElement.value = graduatesCount;
// document.body.append(graduatesCountElement);

// let areYouReadyElement = document.createElement("input");
// areYouReadyElement.type = "checkbox";
// areYouReadyElement.value = areYouReady;
// areYouReadyElement.checked = "true";
// document.body.append(areYouReadyElement);

// const date = {
//   title: "incubator",
//   graduatesCount: 2000,
//   areYouReady: true,
//   technologies: [
//     { id: 1, title: "Front" },
//     { id: 2, title: "Back" },
//     { id: 3, title: "DevOps" },
//   ],
// };

// let pageTitleElement = document.createElement("h1");
// pageTitleElement.innerText = date.title;
// document.body.append(pageTitleElement);

// let graduatesCountElement = document.createElement("input");
// graduatesCountElement.value = date.graduatesCount;
// document.body.append(graduatesCountElement);

// let areYouReadyElement = document.createElement("input");
// areYouReadyElement.type = "checkbox";
// areYouReadyElement.value = date.areYouReady;
// areYouReadyElement.checked = "true";
// document.body.append(areYouReadyElement);

// let technologiesSelectElement = document.createElement("select");
// document.body.append(technologiesSelectElement);

// let technologiesOption0Element = document.createElement("option");
// // technologiesOption0Element.value = date.technologies[0];
// technologiesOption0Element.innerText = date.technologies[0].title;
// technologiesSelectElement.append(technologiesOption0Element);

// let technologiesOption1Element = document.createElement("option");
// // technologiesOption0Element.value = date.technologies[1];
// technologiesOption1Element.innerText = date.technologies[1].title;
// technologiesSelectElement.append(technologiesOption1Element);

// let technologiesOption2Element = document.createElement("option");
// // technologiesOption0Element.value = date.technologies[2];
// technologiesOption2Element.innerText = date.technologies[2].title;
// technologiesSelectElement.append(technologiesOption2Element);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// let objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// for (let i = 0; i < objects.length; i++) {
//   const object = objects[i];
//   console.log(object.name);
// }

// const isPositive = (a) => {
//   if (a >= 0) {
//     return console.log(true);
//   }
//   return console.log(false);
// };

// isPositive(-1);

// const giveMeResult = (day) => {
//   if (day === "Saturday" || day === "Sunday") {
//     day = "dayOff";
//   } else {
//     day = "weekday";
//   }

//   switch (day) {
//     case "weekday":
//       console.log("Будний день");
//       break;

//     case "dayOff":
//       console.log("Выходной день");
//       break;
//     default:
//       console.log("Некорректное значение дня недели");
//   }
// };

// giveMeResult("Sunday");

// let prof = 'proger';
// let age = 18

// if (prof === 'proger' || age !== 18) {
//     console.log('Success!');
//  }

// if (prof === 'proger' && age !== 18) {
//      console.log('Success!');
//  }

// const isInRange = (number) => {
//   (number >= 10 && number <= 20) || number === 0 || number === 100
//     ? console.log(true)
//     : console.log(false);
// };

// isInRange(100);

// const user = {
//   name: "Igor",
//   age: 30,
// };

// console.log(user.name);
// user.name = "Nastya";
// console.log(user.name);

// // const защищает от изменений только саму переменную user, а не её содержимое.
// // const выдаст ошибку только если мы присвоим переменной другое значение: user=....

// user.prof = "proger";
// console.log(user);

// delete user.prof;
// console.log(user);
// console.log(user["name"]); //обратиться можно через [но нужны ""]

// //копирование Объектов
// let user = { name: "Igor" };
// //let user2 = user;
// let user2 = { ...user };
// user.name = "Nastya";
// console.log(user);
// console.log(user2);

// let prep = {
//   name: "Igor",
//   sizes: {
//     height: 177,
//     weight: 80,
//   },
// };

// //let prep2 = { ...prep };
// let prep2 = { ...prep, sizes: { ...prep.sizes } };
// prep.name = "Nastya";
// prep.sizes.weight = 50;
// console.log(prep);
// console.log(prep2);

// //Сборка мусора - удаление ссылки-приводит к удалению объекта

// let prep = {
//   name: "Igor",
//   sizes: {
//     height: 177,
//     weight: 80,
//   },
// };

// const prep2 = { ...prep, sizes: { ...prep.sizes } };
// prep2.isMarried = true;

// console.log(prep);
// console.log(prep2);
