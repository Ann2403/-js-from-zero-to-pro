let startBtn = document.querySelector('#start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    money, time,

    appDate = {
        budget: money,
        timeData: time,
        expenses: { },
        optionalExpenses: { },
        income: [ ],
        savings: false,
    };

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-01");
    money = +prompt("Ваш бюджет на месяц?", "10000");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "10000");
    }
    appDate.budget = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

let sumExpenses = 0;
expensesBtn.addEventListener('click', function() {
    
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
            a != "" && b !="" && a.length < 50) {
                console.log("done");
                appDate.expenses[a] = b; 
                sumExpenses += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sumExpenses;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        if (opt != "" && opt != null && typeof(opt) === 'string') {
            appDate.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appDate.optionalExpenses[i] + ' ';
        } else {
            i--;
        }
    }
});

countBtn.addEventListener('click', function() {

    if(appDate.budget != undefined) {
        appDate.moneyPerDay = ((appDate.budget-sumExpenses)/30).toFixed();
        daybudgetValue.textContent = appDate.moneyPerDay;

        if (appDate.moneyPerDay < 300) {
            levelValue.textContent = "Минимальный уровень достатка!";
        } else if (appDate.moneyPerDay > 300 && appDate.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appDate.moneyPerDay > 2000){
            levelValue.textContent ="Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка!";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка!";
        levelValue.textContent = "Нажмите 'Начать расчет'";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    for (let i = 0; i < 1; i++) {
        if (typeof(items) === 'string' && items != "" && typeof(items) != null) {
            appDate.income = items.split(',');
            incomeValue.textContent = appDate.income;
        } else {
            i--;
        }  
    }
});

checkSaving.addEventListener('click', function() {
    if (appDate.savings == true) {
        appDate.savings = false;
    } else {
        appDate.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appDate.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appDate.monthIncome = sum/100/12*percent;
        appDate.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appDate.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
    
        appDate.monthIncome = sum/100/12*percent;
        appDate.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appDate.yearIncome.toFixed(1); 
    }
});

