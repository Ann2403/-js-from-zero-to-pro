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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget() {
        appDate.moneyPerDay = (appDate.budget/30).toFixed();
        alert("Ваш бюджет на 1 день: " + appDate.moneyPerDay + " грн"); 
    },
    detectLevel() {
        if (appDate.moneyPerDay < 300) {
            console.log("Минимальный уровень достатка!");
        } else if (appDate.moneyPerDay > 300 && appDate.moneyPerDay < 2000) {
            console.log("Средний уровень достатка!");
        } else if (appDate.moneyPerDay > 2000){
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings() {
         if (appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appDate.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appDate.monthIncome);
        }
    },
    chooseOptExpenses() {
        let i = 0;
        let colExp = 1;
        while (i < 3) {
            let expenditure = prompt("Введите необязательную статью расходов");
            if (expenditure != "" && expenditure != null && 
                typeof(expenditure) === 'string') {
                    appDate.optionalExpenses[colExp] = expenditure;
                    colExp++;
            }
            i++;
        } 
    },
    chooseIncome: function() {
        let i = 0;
        while (i < 1) {
            let items = prompt("Что принесет дополнительный доход? (Укажите через запятую)", "");
            if (typeof(items) === 'string' && items != "" && typeof(items) != null) {
                appDate.income = items.split(', ');
                appDate.income.push(prompt("Может что-то еще?"));
                appDate.income.sort(); 
            } else {
                i--;
            }
            i++;
        }
        let index = 1;
        appDate.income.forEach(element => {
            alert("Способы доп. заработка: " + index + " - " + element + ";");
            index++;
        });
    }
};
console.log("Наша программа включает в себя данные: ");
for (let key in appDate) {
    console.log(key + " - " + appDate[key]);
}