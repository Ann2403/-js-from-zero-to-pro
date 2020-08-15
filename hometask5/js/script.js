let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    newMenuItem5 = document.createElement('li'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    promptAnswer = document.querySelector('.prompt');

//присваивание новому пункту имя класса и добавляем его в конец списка меню
newMenuItem5.classList.add('menu-item');
newMenuItem5.innerHTML = 'Пятий пункт';
menu.appendChild(newMenuItem5);

//Меняем пункты местами
menu.insertBefore(menuItem[2], menuItem[1]);

/*//создание копий третьего и четвертого пунка
let newMenuItem3 = menuItem[1].cloneNode(true);
//добавление третьего, червертого и пятого пунка в конец списка меню
menu.appendChild(newMenuItem3);
menu.appendChild(menuItem[3].cloneNode(true));
menu.appendChild(newMenuItem5);
//смена расположения между вторым и третьим пунком
menu.replaceChild(menuItem[2], menuItem[1]);
//третьим и четвертым
menu.replaceChild(newMenuItem3, menuItem[3]);*/

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();

let question = prompt("Каково ваше отношение к технике apple?", "");
promptAnswer.textContent = question;
