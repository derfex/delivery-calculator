(function(d) {
    'use strict';
    // ## Вспомогательные функции ##
    // Создать пустую коллекцию:
    function _clctn() { return Object.create(null); }
    // Получить [[Class]] переменной:
    function _getClass(obj) { return Object.prototype.toString.call(obj).slice(8, -1); }
    // Проверить [[Class]] переменной:
    function _is(type, obj) { return obj !== undefined && obj !== null && _getClass(obj) === type; }

    // ## Данные ##
    var data = _clctn();

    // ### Продукция ###
    data.production = {
        IMAGE_PREFIX_PATH: 'resource/image/production/450x300/',
        PRICE_POSTFIX: ' ₽ за кг.',
        _getOatPrice: _clctn(),
    };
    data.production._getOatPrice.value = function(weight) {
        return weight < 5000 ? 10.00 : 9.00;
    };
    data.production._getOatPrice.info = function() {
        return '10.00' + this.PRICE_POSTFIX + '; от 5 тонн — 9.00' + this.PRICE_POSTFIX;
    }.bind(data.production);
    // Список товаров:
    data.production.LIST = [
        { caption: 'Картофель отборный'                         ,  image: 'potato-01.jpg'            ,  price: 23.00 },
        { caption: 'Картофель свежий'                           ,  image: 'potato-02.jpg'            ,  price: 13.00 },
        { caption: 'Картофель мелкая фракция'                   ,  image: 'potato-03.jpg'            ,  price: 10.50 },
        { caption: 'Картофель семенной «Коломбо»'               ,  image: 'potato-04.jpg'            ,  price: 24.00 },
        { caption: 'Картофель семенной «Ред Скарлет»'           ,  image: 'potato-05.jpg'            ,  price: 21.00 },
        { caption: 'Картофель семенной «Гала»'                  ,  image: 'potato-06.jpg'            ,  price: 12.00 },
        { caption: 'Картофель семенной «Рамос»'                 ,  image: 'potato-07.jpg'            ,  price: 20.00 },
        { caption: 'Морковь (эконом)'                           ,  image: 'carrot-01.jpg'            ,  price:  5.20 },
        { caption: 'Свекла отборная'                            ,  image: 'beet-01.jpg'              ,  price: 14.50 },
        { caption: 'Свекла'                                     ,  image: 'beet-02.jpg'              ,  price:  9.50 },
        { caption: 'Свекла 35+'                                 ,  image: 'beet-03.jpg'              ,  price:  5.00 },
        { caption: 'Пшеница'                                    ,  image: 'wheat-01.jpg'             ,  price: 10.00 },
        { caption: 'Овёс'                                       ,  image: 'oat-01.jpg'               ,  price: data.production._getOatPrice },
        { caption: 'Овсяно-пшеничная смесь'                     ,  image: 'oat-wheat-mixture-01.jpg' ,  price: 11.00 },
        { caption: 'Горчица'                                    ,  image: 'mustard-01.jpg'           ,  price: 40.00 },
        { caption: 'Кормовая смесь (картофель, свекла)'         ,  image: 'fodder-mixture-01.jpg'    ,  price:  3.00 },
        { caption: 'Кормовая смесь в сетке (картофель, свекла)' ,  image: 'fodder-mixture-01.jpg'    ,  price:  5.00 },
        { caption: 'Кормовая смесь (морковь)'                   ,  image: 'fodder-mixture-02.jpg'    ,  price:  3.50 }
    ];

    // ### Места назначения ###
    data.destination = _clctn();
    // Список мест назначения:
    data.destination.LIST = [
        { caption: 'Лихославль'        ,   distance:   7,   costPerKM: { t20: 160.55, t5: 92.33, t1: 90.35 } },
        { caption: 'Тверь'             ,   distance:  60,   costPerKM: { t20:  39.63, t5: 25.22, t1: 23.24 } },
        { caption: 'Москва'            ,   distance: 228,   costPerKM: { t20:  27.86, t5: 18.69, t1:  null } },
        { caption: 'Санкт-Петербург'   ,   distance: 532,   costPerKM: { t20:  26.19, t5:  null, t1:  null } },
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

    // ## Обработчики ##
    var handler = _clctn();

    // ### Продукция ###
    handler.production = {
        field: {
            p: d.getElementById('production'),
        },
        info: {
            pBox: d.getElementById('productionInfo'),
        },
    };
    // Инициализация поля выбора:
    handler.production.field.init = function() {
        var productionOptionsHTML = '';
        data.production.LIST.forEach(function(product, i) {
            productionOptionsHTML += '<option value="' + i + '">' + product.caption + '</option>\r\n';
        });
        this.p.innerHTML = productionOptionsHTML;
    }.bind(handler.production.field);
    // Инициализация информации о продукции:
    handler.production.info.init = function() {
        this.pImage = this.pBox.children[0];
        this.pCaption = this.pBox.children[1].children[0];
        this.pPrice = this.pBox.children[1].children[1];
    }.bind(handler.production.info);
    // Инициализация интерфейса продукции:
    handler.production.init = function() {
        this.field.init();
        this.info.init();
        this.getValueIndex = function() {
            return parseInt(this.field.p.value, 10);
        }.bind(this);
        this.getData = function() {
            var dataProduction = data.production.LIST[this.getValueIndex()];
            dataProduction.image = data.production.IMAGE_PREFIX_PATH + dataProduction.image;
            return dataProduction;
        }.bind(this);
        this.getData.priceInfo = function() {
            var price = this.getData().price;
            return !_is('Object', price)
                ? price + data.production.PRICE_POSTFIX
                : price.info();
        }.bind(this);
        this.getData.priceValue = function(weight) {
            var price = this.getData().price;
            return !_is('Object', price)
                ? price
                : price.value(weight);
        }.bind(this);
        this.field.p.addEventListener('change', function() {
            var dataProduction = this.getData();
            this.info.pImage.setAttribute('src', dataProduction.image);
            this.info.pImage.setAttribute('alt', dataProduction.caption);
            this.info.pCaption.setAttribute('title', dataProduction.caption);
            this.info.pCaption.innerText = dataProduction.caption;
            this.info.pPrice.innerText = this.getData.priceInfo();
        }.bind(this));
    }.bind(handler.production);
    handler.production.init();
    // ### Масса груза ###
    handler.weight = {
        field: {
            p: d.getElementById('weight'),
        }
    };
    handler.weight.getValue = function() {
        return parseInt(this.field.p.value, 10);
    }.bind(handler.weight);

    // ### Места назначения ###
    handler.destination = {
        field: {
            p: d.getElementById('destination'),
        }
    };
    // Инициализация поля выбора:
    handler.destination.field.init = function() {
        var destinationOptionsHTML = '';
        data.destination.LIST.forEach(function(destination, i) {
            destinationOptionsHTML += '<option value="' + i + '">' + destination.caption + '</option>\r\n';
            if (i === 3) destinationOptionsHTML += '<optgroup label="Ещё">\r\n';
        });
        destinationOptionsHTML += '</optgroup>\r\n';
        this.p.innerHTML = destinationOptionsHTML;
    }.bind(handler.destination.field);
    // Инициализация интерфейса места назначения:
    handler.destination.init = function() {
        this.field.init();
        this.getValueIndex = function() {
            return parseInt(this.field.p.value, 10);
        }.bind(this);
        this.getData = function() {
            return data.destination.LIST[this.getValueIndex()];
        }.bind(this);
    }.bind(handler.destination);
    handler.destination.init();

    // ### Итог ###
    handler.result = {
        p: d.getElementById('result'),
        pResultBox: d.getElementById('resultBox'),
    };
    handler.result.show = function() {
        this.pResultBox.style.display = '';
    }.bind(handler.result);
    handler.result.getRowHTMLCost = function(caption, cost, inTotal) {
        var className = 'calc-UI__check-row-cost' + (!inTotal ? '' : ' calc-UI__check-row-cost--in-total');
        return '<p class="' + className + '"><span>' + caption + ': </span><span>' + cost + ' ₽</span></p>';
    }.bind(handler.result);

    // ### Форма ###
    handler.form = {
        p: d.forms.deliveryCalculator,
    };
    handler.form.init = function() {
        this.p.addEventListener('submit', function(event) {
            event.preventDefault();
            var weight = handler.weight.getValue();
            var price = handler.production.getData.priceValue(weight);
            var dataDestination = handler.destination.getData();

            var costPerKM;
            var countTransport = 1;
            if (dataDestination.distance <= 600) {
                if (weight <= 1000)
                    costPerKM = dataDestination.costPerKM.t1 || dataDestination.costPerKM.t5 || dataDestination.costPerKM.t20;
                else if (weight <= 5000)
                    costPerKM = dataDestination.costPerKM.t5 || dataDestination.costPerKM.t20;
                else if (weight <= 20000)
                    costPerKM = dataDestination.costPerKM.t20;
                else {
                    costPerKM = dataDestination.costPerKM.t20;
                    countTransport = Math.ceil(weight / 20000);
                }
            } else {
                costPerKM = dataDestination.costPerKM.t20;
                countTransport = Math.ceil(weight / 20000);
            }

            var s1 = (price * weight).toFixed(2);
            var s2 = (countTransport * dataDestination.distance * 2 * costPerKM).toFixed(2);

            handler.result.p.innerHTML =
                handler.result.getRowHTMLCost('Товар', s1) + '\n' +
                handler.result.getRowHTMLCost('Перевозка', s2) + '\n' +
                handler.result.getRowHTMLCost('Итого', (s1 * 1 + s2 * 1).toFixed(2), true);
            console.log(
                'Товар: ' + s1 + ' ₽ (' + price + ' * ' + weight + ')\r\n' +
                'Перевозка: ' + s2 + ' ₽ (' + countTransport + ' * ' + dataDestination.distance + ' * 2 * ' + costPerKM + ')\r\n' +
                'Итого: ' + (s1 * 1 + s2 * 1).toFixed(2) + ' ₽'
            );
        });
        var _onceShowResult = function() {
            handler.result.show();
            this.p.removeEventListener('submit', _onceShowResult);
        }.bind(this);
        this.p.addEventListener('submit', _onceShowResult);
    }.bind(handler.form);
    handler.form.init();
})(document);
