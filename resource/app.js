'use strict';
var PRODUCTION = [
    { caption: 'Картофель отборный'                         ,  price : 23.00 },
    { caption: 'Картофель свежий'                           ,  price : 13.00 },
    { caption: 'Картофель мелкая фракция'                   ,  price : 10.50 },
    { caption: 'Картофель семенной «Коломбо»'               ,  price : 24.00 },
    { caption: 'Картофель семенной «Ред Скарлет»'           ,  price : 21.00 },
    { caption: 'Картофель семенной «Гала»'                  ,  price : 12.00 },
    { caption: 'Картофель семенной «Рамос»'                 ,  price : 20.00 },
    { caption: 'Морковь (эконом)'                           ,  price :  5.20 },
    { caption: 'Свекла отборная'                            ,  price : 14.50 },
    { caption: 'Свекла'                                     ,  price :  9.50 },
    { caption: 'Свекла 35+'                                 ,  price :  5.00 },
    { caption: 'Пшеница'                                    ,  price : 10.00 },
    { caption: 'Овёс (до 5 т.)'                             ,  price : 10.00 },
    { caption: 'Овёс (свыше 5 т.)'                          ,  price :  9.00 },
    { caption: 'Овсяно-пшеничная смесь'                     ,  price : 11.00 },
    { caption: 'Горчица'                                    ,  price : 40.00 },
    { caption: 'Кормовая смесь (картофель, свекла)'         ,  price :  3.00 },
    { caption: 'Кормовая смесь в сетке (картофель, свекла)' ,  price :  5.00 },
    { caption: 'Кормовая смесь (морковь)'                   ,  price :  3.50 }
];
var PLACE = [
    { caption: 'Лихославль'        ,   distance:   7,   costPerKM: { t20: 160.55, t5: 92.33, t1: 90.35 } },
    { caption: 'Тверь'             ,   distance:  60,   costPerKM: { t20:  39.63, t5: 25.22, t1: 23.24 } },
    { caption: 'Москва'            ,   distance: 228,   costPerKM: { t20:  27.86, t5: 18.69, t1:  null } },
    { caption: 'Санкт-Петербург'   ,   distance: 532,   costPerKM: { t20:  26.19, t5:  null, t1:  null } },
    { caption: '—' },
    { caption: 'Арзамас'           ,   distance: 695,   costPerKM: { t20:  25.59, t5:  null, t1:  null } },
    { caption: 'Балашиха'          ,   distance: 248,   costPerKM: { t20:  27.52, t5: 18.50, t1:  null } },
    { caption: 'Белгород'          ,   distance: 898,   costPerKM: { t20:  25.59, t5:  null, t1:  null } },
    { caption: 'Бологое'           ,   distance: 161,   costPerKM: { t20:  29.61, t5: 19.66, t1: 17.68 } },
    { caption: 'Брянск'            ,   distance: 557,   costPerKM: { t20:  26.07, t5:  null, t1:  null } },
    { caption: 'Великие Луки'      ,   distance: 410,   costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
    { caption: 'Великий Новгород'  ,   distance: 335,   costPerKM: { t20:  26.52, t5: 17.94, t1:  null } },
    { caption: 'Владимир'          ,   distance: 410,   costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
    { caption: 'Вологда'           ,   distance: 516,   costPerKM: { t20:  26.27, t5:  null, t1:  null } },
    { caption: 'Воронеж'           ,   distance: 757,   costPerKM: { t20:  25.95, t5:  null, t1:  null } },
    { caption: 'Воскресенск'       ,   distance: 330,   costPerKM: { t20:  26.56, t5: 17.97, t1:  null } },
    { caption: 'Выборг'            ,   distance: 648,   costPerKM: { t20:  25.73, t5:  null, t1:  null } },
    { caption: 'Вышний Волочок'    ,   distance: 114,   costPerKM: { t20:  32.06, t5: 21.02, t1: 19.04 } },
    { caption: 'Вязьма'            ,   distance: 285,   costPerKM: { t20:  27.02, t5: 18.22, t1:  null } },
    { caption: 'Дзержинск'         ,   distance: 619,   costPerKM: { t20:  25.83, t5:  null, t1:  null } },
    { caption: 'Долгопрудный'      ,   distance: 216,   costPerKM: { t20:  28.09, t5: 18.82, t1:  null } },
    { caption: 'Домодедово'        ,   distance: 274,   costPerKM: { t20:  27.15, t5: 18.30, t1:  null } },
    { caption: 'Дубна'             ,   distance: 163,   costPerKM: { t20:  29.53, t5: 19.62, t1: 17.64 } },
    { caption: 'Егорьевск'         ,   distance: 365,   costPerKM: { t20:  26.28, t5: 17.81, t1:  null } },
    { caption: 'Елец'              ,   distance: 626,   costPerKM: { t20:  25.81, t5:  null, t1:  null } },
    { caption: 'Железногорск'      ,   distance: 694,   costPerKM: { t20:  25.60, t5:  null, t1:  null } },
    { caption: 'Железнодорожный'   ,   distance: 256,   costPerKM: { t20:  27.40, t5: 18.43, t1:  null } },
    { caption: 'Жуковский'         ,   distance: 278,   costPerKM: { t20:  27.10, t5: 18.27, t1:  null } },
    { caption: 'Зеленоград'        ,   distance: 193,   costPerKM: { t20:  28.62, t5: 19.11, t1: 17.13 } },
    { caption: 'Иваново'           ,   distance: 451,   costPerKM: { t20:  25.78, t5: 17.53, t1:  null } },
    { caption: 'Калуга'            ,   distance: 371,   costPerKM: { t20:  26.24, t5: 17.79, t1:  null } },
    { caption: 'Клин'              ,   distance: 113,   costPerKM: { t20:  32.13, t5: 21.06, t1: 19.08 } },
    { caption: 'Ковров'            ,   distance: 488,   costPerKM: { t20:  25.62, t5: 17.45, t1:  null } },
    { caption: 'Коломна'           ,   distance: 345,   costPerKM: { t20:  26.43, t5: 17.90, t1:  null } },
    { caption: 'Королёв'           ,   distance: 235,   costPerKM: { t20:  27.73, t5: 18.62, t1:  null } },
    { caption: 'Кострома'          ,   distance: 461,   costPerKM: { t20:  25.73, t5: 17.51, t1:  null } },
    { caption: 'Красногорск'       ,   distance: 222,   costPerKM: { t20:  27.97, t5: 18.75, t1:  null } },
    { caption: 'Курск'             ,   distance: 762,   costPerKM: { t20:  25.94, t5:  null, t1:  null } },
    { caption: 'Липецк'            ,   distance: 700,   costPerKM: { t20:  25.58, t5:  null, t1:  null } },
    { caption: 'Люберцы'           ,   distance: 252,   costPerKM: { t20:  27.46, t5: 18.47, t1:  null } },
    { caption: 'Медное'            ,   distance:  21,   costPerKM: { t20:  69.29, t5: 41.68, t1: 39.70 } },
    { caption: 'Муром'             ,   distance: 534,   costPerKM: { t20:  26.18, t5:  null, t1:  null } },
    { caption: 'Мытищи'            ,   distance: 230,   costPerKM: { t20:  27.82, t5: 18.67, t1:  null } },
    { caption: 'Наро-Фоминск'      ,   distance: 298,   costPerKM: { t20:  26.87, t5: 18.14, t1:  null } },
    { caption: 'Нижний Новгород'   ,   distance: 639,   costPerKM: { t20:  25.76, t5:  null, t1:  null } },
    { caption: 'Новомосковск'      ,   distance: 456,   costPerKM: { t20:  25.76, t5: 17.52, t1:  null } },
    { caption: 'Ногинск'           ,   distance: 282,   costPerKM: { t20:  27.05, t5: 18.24, t1:  null } },
    { caption: 'Обнинск'           ,   distance: 295,   costPerKM: { t20:  26.90, t5: 18.16, t1:  null } },
    { caption: 'Одинцово'          ,   distance: 240,   costPerKM: { t20:  27.65, t5: 18.57, t1:  null } },
    { caption: 'Орел'              ,   distance: 592,   costPerKM: { t20:  25.93, t5:  null, t1:  null } },
    { caption: 'Орехово-Зуево'     ,   distance: 320,   costPerKM: { t20:  26.65, t5: 18.02, t1:  null } },
    { caption: 'Пенза'             ,   distance: 876,   costPerKM: { t20:  25.64, t5:  null, t1:  null } },
    { caption: 'Петрозаводск'      ,   distance: 824,   costPerKM: { t20:  25.76, t5:  null, t1:  null } },
    { caption: 'Подольск'          ,   distance: 273,   costPerKM: { t20:  27.16, t5: 18.30, t1:  null } },
    { caption: 'Псков'             ,   distance: 550,   costPerKM: { t20:  26.11, t5:  null, t1:  null } },
    { caption: 'Пушкино'           ,   distance: 241,   costPerKM: { t20:  27.63, t5: 18.56, t1:  null } },
    { caption: 'Раменское'         ,   distance: 283,   costPerKM: { t20:  27.04, t5: 18.23, t1:  null } },
    { caption: 'Реутов'            ,   distance: 242,   costPerKM: { t20:  27.61, t5: 18.55, t1:  null } },
    { caption: 'Ржев'              ,   distance: 162,   costPerKM: { t20:  29.57, t5: 19.64, t1: 17.66 } },
    { caption: 'Рыбинск'           ,   distance: 344,   costPerKM: { t20:  26.44, t5: 17.90, t1:  null } },
    { caption: 'Рязань'            ,   distance: 431,   costPerKM: { t20:  25.88, t5: 17.59, t1:  null } },
    { caption: 'Саранск'           ,   distance: 883,   costPerKM: { t20:  25.62, t5:  null, t1:  null } },
    { caption: 'Сергиев Посад'     ,   distance: 250,   costPerKM: { t20:  27.49, t5: 18.48, t1:  null } },
    { caption: 'Серпухов'          ,   distance: 334,   costPerKM: { t20:  26.52, t5: 17.95, t1:  null } },
    { caption: 'Смоленск'          ,   distance: 445,   costPerKM: { t20:  25.81, t5: 17.55, t1:  null } },
    { caption: 'Старый Оскол'      ,   distance: 865,   costPerKM: { t20:  25.66, t5:  null, t1:  null } },
    { caption: 'Ступино'           ,   distance: 346,   costPerKM: { t20:  26.42, t5: 17.89, t1:  null } },
    { caption: 'Тамбов'            ,   distance: 692,   costPerKM: { t20:  25.60, t5:  null, t1:  null } },
    { caption: 'Торжок'            ,   distance:  46,   costPerKM: { t20:  44.49, t5: 27.92, t1: 25.94 } },
    { caption: 'Тула'              ,   distance: 411,   costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
    { caption: 'Химки'             ,   distance: 211,   costPerKM: { t20:  28.20, t5: 18.88, t1:  null } },
    { caption: 'Чебоксары'         ,   distance: 893,   costPerKM: { t20:  25.60, t5:  null, t1:  null } },
    { caption: 'Череповец'         ,   distance: 399,   costPerKM: { t20:  26.06, t5: 17.69, t1:  null } },
    { caption: 'Щёлково'           ,   distance: 258,   costPerKM: { t20:  27.37, t5: 18.42, t1:  null } },
    { caption: 'Электросталь'      ,   distance: 282,   costPerKM: { t20:  27.05, t5: 18.24, t1:  null } },
    { caption: 'Ярославль'         ,   distance: 358,   costPerKM: { t20:  26.33, t5: 17.84, t1:  null } }
];



var pProduction = document.getElementById('production');
var productionOptionsHTML = '';
PRODUCTION.forEach(function(product, i, array) {
    productionOptionsHTML += '<option value="' + product.price + '">' + product.caption + '</option>\r\n';
});
pProduction.innerHTML = productionOptionsHTML;


var pWeight = document.getElementById('weight');


var pPlace = document.getElementById('place');
var placeOptionsHTML = '';
PLACE.forEach(function(place, i, array) {
    placeOptionsHTML += '<option value="' + i + '">' + place.caption + '</option>\r\n';
});
pPlace.innerHTML = placeOptionsHTML;


var pResult = document.getElementById('result');

var pDeliveryCalculator = document.forms.deliveryCalculator;
pDeliveryCalculator.addEventListener('submit', function(event) {
    event.preventDefault();
    var price    = parseInt(pProduction.value, 10);
    var weight   = parseInt(pWeight.value, 10);

    var dataPlace = PLACE[pPlace.value];

    var costPerKM;
    var countTransport = 1;
    if (dataPlace.distance <= 600) {
        if (weight <= 1000)
            costPerKM = dataPlace.costPerKM.t1 || dataPlace.costPerKM.t5 || dataPlace.costPerKM.t20;
        else if (weight <= 5000)
            costPerKM = dataPlace.costPerKM.t5 || dataPlace.costPerKM.t20;
        else if (weight <= 20000)
            costPerKM = dataPlace.costPerKM.t20;
        else {
            costPerKM = dataPlace.costPerKM.t20;
            countTransport = Math.ceil(weight / 20000);
        }
    } else {
        costPerKM = dataPlace.costPerKM.t20;
        countTransport = Math.ceil(weight / 20000);
    }

    var s1 = (price * weight).toFixed(2);
    var s2 = (countTransport * dataPlace.distance * 2 * costPerKM).toFixed(2);

    pResult.style.display = '';
    pResult.innerHTML =
    '<p>Товар: ' + s1 + ' ₽</p>\r\n' +
    '<p>Перевозка: ' + s2 + ' ₽</p>\r\n' +
    '<p>Стоимость: ' + (s1 * 1 + s2 * 1).toFixed(2) + ' ₽</p>';
    console.log(
        'Товар: ' + s1 + ' ₽ (' + price + ' * ' + weight + ')\r\n' +
        'Перевозка: ' + s2 + ' ₽ (' + countTransport + ' * ' + dataPlace.distance + ' * 2 * ' + costPerKM + ')\r\n' +
        'Стоимость: ' + (s1 * 1 + s2 * 1).toFixed(2) + ' ₽'
    );
});