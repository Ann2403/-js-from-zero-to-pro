/*обработчик события на все окно - пока не загрузится DOMдерево 
не будет выполняться код, чтобы не произошло ошибок*/
window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    /*************************************************************************
                                    ТАБЫ 
    *************************************************************************/
    //обьявление переменных для табов
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        moreTabe = document.querySelectorAll('.description-btn'),
        //обьявление переменных для вызова модального окна
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    //функция скрытия всех табов
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //скрываем все табы кроме первого
    hideTabContent(1);

    //функция отображения заданого таба
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            moreTabe[b].addEventListener('click', function() {
                //делаем видимым окно
                overlay.style.display = 'block';
                //добавляем класс который отвечает за анимацию
                this.classList.add('more-splash');
                //делаем неподвижным все окно ззади модального окна
                document.body.style.overflow = 'hidden';
            });
            /*//функция закрытия модального окна
            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                moreTabe[b].classList.remove('more-splash');
                document.body.style.overflow = '';
            });*/
        }
    }

    //обработчик события - клик мыши на заголовок(рубрику)
    info.addEventListener('click', function(event) {
        //обьявление перемменой и присвоение ей рубрики на которую кликнули
        let target = event.target;
        //если кликнули на рубрику, а не на родителя
        if (target && target.classList.contains('info-header-tab')) {
            //перебираем все рубрики
            for (let i = 0; i < tab.length; i++) {
                //и если класс номер рубрики соответсвует номеру таба
                if (target == tab[i]) {
                    //скрываем все табы
                    hideTabContent(0);
                    //и показываем выбранный
                    showTabContent(i);
                    //выходим с цыкла
                    break;
                }
            }
        }
    });

    /*************************************************************************
                                    ТАЙМЕР 
    *************************************************************************/
    //определяем дедлайн
    let deadline = '2020-08-21';

    //функция вычисляет сколько осталось времени до дедлайна
    function getTimeRemaining(endTime) {
        //превращаем переданное время и текущее в милисекунды
        let t = Date.parse(endTime) - Date.parse(new Date()),
            //получаем секунды
            seconds = Math.floor((t/1000)%60),
            //минуты
            minutes = Math.floor((t/1000/60)%60),
            //часы
            hours = Math.floor(t/1000/60/60);
        //возвращаем объект со всеми вычислениями
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    //функция выведения значений таймера
    function setClock(id, endTime) {
        //выбираем элемент переданный в функция в качестве аргумента
        let timer = document.getElementById(id),
        //находим у него поля с такими скласами  
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            //вызываем функцию отображения таймера каждую секунду 
            timeInterval = setInterval(updateClock, 1000);
        // функция отображения таймера в указаном поле
        function updateClock() {
            //опрделяем сколько времени осталось до дедлайна
            let t = getTimeRemaining(endTime);
            //функция для вывода чисел в формате 02:09:07
            function addZero(num) {
                //если число меньше 10
                if (num < 10) {
                    //возвращаем строку '0' + число
                    return '0' + num;
                } else { 
                    //иначе просто число
                    return num; 
                }
            }
            //отображаем в каждом поле соответсвующее значение
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            //если дедлайн наступил
            if(t.total <=0) {
                //останавливаем таймер обратного отсчета
                clearInterval(timeInterval);
                //отображаем в каждом поле 00
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    //вызываем таймер для поля с id='timer' и указаным дедлайном
    setClock('timer', deadline);

    /*************************************************************************
                                МОДАЛЬНОЕ ОКНО 
    *************************************************************************/

    //функция открытия модального окна
    more.addEventListener('click', function() {
        //делаем видимым окно
        overlay.style.display = 'block';
        //добавляем класс который отвечает за анимацию
        this.classList.add('more-splash');
        //делаем неподвижным все окно ззади модального окна
        document.body.style.overflow = 'hidden';
    });
    //функция закрытия модального окна
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});