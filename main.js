'use strict';
let money = prompt("Ваш бюджет на месяц?", "10000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

let question = prompt("Введите обязательную статью расходов в этом месяцу");
let answer = prompt("Во сколько обойдется?");

let appDate = {
    money: money,
    timeData: time,
    expenses: {
        question: answer
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false
};

alert("Ваш бюджет на 1 день: " + Math.trunc((money-answer)/30) + " грн");