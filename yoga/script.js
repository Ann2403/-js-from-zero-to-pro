/*обработчик события на все окно - пока не загрузится DOMдерево 
не будет выполняться код, чтобы не произошло ошибок*/
window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    //обьявление переменных
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

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

});