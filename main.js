'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "10000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "10000");
    }
}
start();


let appDate = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [ ],
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

/*
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяцу"),
        b = prompt("Во сколько обойдется?");

    if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != "" && b != "" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b; 
    } else {
        i--;
    }
    i++;
}

do {
    let a = prompt("Введите обязательную статью расходов в этом месяцу"),
        b = prompt("Во сколько обойдется?");

    if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != "" && b !="" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b; 
    } else {
        i--;
    }
    i++;
} while (i < 2);*/

function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget/30).toFixed();
    alert("Ваш бюджет на 1 день: " + appDate.moneyPerDay + " грн"); 
}
detectDayBudget();

function detectLevel() {
    if (appDate.moneyPerDay < 300) {
    console.log("Минимальный уровень достатка!");
    } else if (appDate.moneyPerDay > 300 && appDate.moneyPerDay < 2000) {
        console.log("Средний уровень достатка!");
    } else if (appDate.moneyPerDay > 2000){
        console.log("Высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка!");
    }
}
detectLevel();

function checkSavings() {
    if (appDate.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appDate.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appDate.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let i = 0;
    let colExp = 1;
    while (i < 3) {
        let expenditure = prompt("Введите обязательную статью расходов в этом месяцу");
        if (expenditure != "" && expenditure != null && 
            typeof(expenditure) === 'string') {
                appDate.optionalExpenses[colExp] = expenditure;
                colExp++;
        }
        i++;
    } 
}
chooseOptExpenses();