'use strict';
let money = +prompt("Ваш бюджет на месяц?", "10000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

let appDate = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [ ],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяцу"),
        b = prompt("Во сколько обойдется?");

    if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != "" && b !="" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b; 
    } else {
        i--;
    }
}

/*
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяцу"),
        b = prompt("Во сколько обойдется?");

    if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != "" && b !="" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b; 
            i++;
    } else {
        i = 1;
    }
}

do {
    let a = prompt("Введите обязательную статью расходов в этом месяцу"),
        b = prompt("Во сколько обойдется?");

    if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != "" && b !="" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b; 
            i++;
    } else {
        i = 1;
    }
} while (i < 2);*/

appDate.moneyPerDay = Math.trunc(appDate.budget/30);

alert("Ваш бюджет на 1 день: " + appDate.moneyPerDay + " грн");

if (appDate.moneyPerDay < 300) {
    console.log("Минимальный уровень достатка!");
} else if (appDate.moneyPerDay > 300 && appDate.moneyPerDay < 2000) {
    console.log("Средний уровень достатка!");
} else if (appDate.moneyPerDay > 2000){
    console.log("Высокий уровень достатка!");
} else {
    console.log("Произошла ошибка!");
}