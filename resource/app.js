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
        { caption: 'Картофель отборный'                         ,  image: 'potato-01.jpg'            ,  regionalPriceIndex:    0,  price: 23.00 },
        { caption: 'Картофель свежий'                           ,  image: 'potato-02.jpg'            ,  regionalPriceIndex:    0,  price: 13.00 },
        { caption: 'Картофель мелкая фракция'                   ,  image: 'potato-03.jpg'            ,  regionalPriceIndex:    0,  price: 10.50 },
        { caption: 'Картофель семенной «Коломбо»'               ,  image: 'potato-04.jpg'            ,  regionalPriceIndex:    0,  price: 24.00 },
        { caption: 'Картофель семенной «Ред Скарлет»'           ,  image: 'potato-05.jpg'            ,  regionalPriceIndex:    0,  price: 21.00 },
        { caption: 'Картофель семенной «Гала»'                  ,  image: 'potato-06.jpg'            ,  regionalPriceIndex:    0,  price: 12.00 },
        { caption: 'Картофель семенной «Рамос»'                 ,  image: 'potato-07.jpg'            ,  regionalPriceIndex:    0,  price: 20.00 },
        { caption: 'Морковь (эконом)'                           ,  image: 'carrot-01.jpg'            ,  regionalPriceIndex:    1,  price:  5.20 },
        { caption: 'Свекла отборная'                            ,  image: 'beet-01.jpg'              ,  regionalPriceIndex:    2,  price: 14.50 },
        { caption: 'Свекла'                                     ,  image: 'beet-02.jpg'              ,  regionalPriceIndex:    2,  price:  9.50 },
        { caption: 'Свекла 35+'                                 ,  image: 'beet-03.jpg'              ,  regionalPriceIndex:    2,  price:  5.00 },
        { caption: 'Пшеница'                                    ,  image: 'wheat-01.jpg'             ,  regionalPriceIndex: null,  price: 10.00 },
        { caption: 'Овёс'                                       ,  image: 'oat-01.jpg'               ,  regionalPriceIndex: null,  price: data.production._getOatPrice },
        { caption: 'Овсяно-пшеничная смесь'                     ,  image: 'oat-wheat-mixture-01.jpg' ,  regionalPriceIndex: null,  price: 11.00 },
        { caption: 'Горчица'                                    ,  image: 'mustard-01.jpg'           ,  regionalPriceIndex: null,  price: 40.00 },
        { caption: 'Кормовая смесь (картофель, свекла)'         ,  image: 'fodder-mixture-01.jpg'    ,  regionalPriceIndex: null,  price:  3.00 },
        { caption: 'Кормовая смесь в сетке (картофель, свекла)' ,  image: 'fodder-mixture-01.jpg'    ,  regionalPriceIndex: null,  price:  5.00 },
        { caption: 'Кормовая смесь (морковь)'                   ,  image: 'fodder-mixture-02.jpg'    ,  regionalPriceIndex: null,  price:  3.50 }
    ];

    // ### Места назначения ###
    data.destination = _clctn();
    // Список мест назначения:
    data.destination.LIST = [
        { caption: 'Лихославль'        ,  regionID:  1,  distance:   7,  costPerKM: { t20: 160.55, t5: 92.33, t1: 90.35 } },
        { caption: 'Тверь'             ,  regionID:  1,  distance:  60,  costPerKM: { t20:  39.63, t5: 25.22, t1: 23.24 } },
        { caption: 'Москва'            ,  regionID:  2,  distance: 228,  costPerKM: { t20:  27.86, t5: 18.69, t1:  null } },
        { caption: 'Санкт-Петербург'   ,  regionID:  3,  distance: 532,  costPerKM: { t20:  26.19, t5:  null, t1:  null } },
        { caption: 'Арзамас'           ,  regionID:  4,  distance: 695,  costPerKM: { t20:  25.59, t5:  null, t1:  null } },
        { caption: 'Балашиха'          ,  regionID:  5,  distance: 248,  costPerKM: { t20:  27.52, t5: 18.50, t1:  null } },
        { caption: 'Белгород'          ,  regionID:  6,  distance: 898,  costPerKM: { t20:  25.59, t5:  null, t1:  null } },
        { caption: 'Бологое'           ,  regionID:  1,  distance: 161,  costPerKM: { t20:  29.61, t5: 19.66, t1: 17.68 } },
        { caption: 'Брянск'            ,  regionID:  7,  distance: 557,  costPerKM: { t20:  26.07, t5:  null, t1:  null } },
        { caption: 'Великие Луки'      ,  regionID:  8,  distance: 410,  costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
        { caption: 'Великий Новгород'  ,  regionID:  9,  distance: 335,  costPerKM: { t20:  26.52, t5: 17.94, t1:  null } },
        { caption: 'Владимир'          ,  regionID: 10,  distance: 410,  costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
        { caption: 'Вологда'           ,  regionID: 11,  distance: 516,  costPerKM: { t20:  26.27, t5:  null, t1:  null } },
        { caption: 'Воронеж'           ,  regionID: 12,  distance: 757,  costPerKM: { t20:  25.95, t5:  null, t1:  null } },
        { caption: 'Воскресенск'       ,  regionID:  5,  distance: 330,  costPerKM: { t20:  26.56, t5: 17.97, t1:  null } },
        { caption: 'Выборг'            ,  regionID: 13,  distance: 648,  costPerKM: { t20:  25.73, t5:  null, t1:  null } },
        { caption: 'Вышний Волочок'    ,  regionID:  1,  distance: 114,  costPerKM: { t20:  32.06, t5: 21.02, t1: 19.04 } },
        { caption: 'Вязьма'            ,  regionID: 14,  distance: 285,  costPerKM: { t20:  27.02, t5: 18.22, t1:  null } },
        { caption: 'Дзержинск'         ,  regionID:  4,  distance: 619,  costPerKM: { t20:  25.83, t5:  null, t1:  null } },
        { caption: 'Долгопрудный'      ,  regionID:  5,  distance: 216,  costPerKM: { t20:  28.09, t5: 18.82, t1:  null } },
        { caption: 'Домодедово'        ,  regionID:  5,  distance: 274,  costPerKM: { t20:  27.15, t5: 18.30, t1:  null } },
        { caption: 'Дубна'             ,  regionID:  5,  distance: 163,  costPerKM: { t20:  29.53, t5: 19.62, t1: 17.64 } },
        { caption: 'Егорьевск'         ,  regionID:  5,  distance: 365,  costPerKM: { t20:  26.28, t5: 17.81, t1:  null } },
        { caption: 'Елец'              ,  regionID: 15,  distance: 626,  costPerKM: { t20:  25.81, t5:  null, t1:  null } },
        { caption: 'Железногорск'      ,  regionID: 16,  distance: 694,  costPerKM: { t20:  25.60, t5:  null, t1:  null } },
        { caption: 'Железнодорожный'   ,  regionID:  5,  distance: 256,  costPerKM: { t20:  27.40, t5: 18.43, t1:  null } },
        { caption: 'Жуковский'         ,  regionID:  5,  distance: 278,  costPerKM: { t20:  27.10, t5: 18.27, t1:  null } },
        { caption: 'Зеленоград'        ,  regionID:  5,  distance: 193,  costPerKM: { t20:  28.62, t5: 19.11, t1: 17.13 } },
        { caption: 'Иваново'           ,  regionID: 17,  distance: 451,  costPerKM: { t20:  25.78, t5: 17.53, t1:  null } },
        { caption: 'Калуга'            ,  regionID: 18,  distance: 371,  costPerKM: { t20:  26.24, t5: 17.79, t1:  null } },
        { caption: 'Клин'              ,  regionID:  1,  distance: 113,  costPerKM: { t20:  32.13, t5: 21.06, t1: 19.08 } },
        { caption: 'Ковров'            ,  regionID: 10,  distance: 488,  costPerKM: { t20:  25.62, t5: 17.45, t1:  null } },
        { caption: 'Коломна'           ,  regionID:  5,  distance: 345,  costPerKM: { t20:  26.43, t5: 17.90, t1:  null } },
        { caption: 'Королёв'           ,  regionID:  5,  distance: 235,  costPerKM: { t20:  27.73, t5: 18.62, t1:  null } },
        { caption: 'Кострома'          ,  regionID: 19,  distance: 461,  costPerKM: { t20:  25.73, t5: 17.51, t1:  null } },
        { caption: 'Красногорск'       ,  regionID:  5,  distance: 222,  costPerKM: { t20:  27.97, t5: 18.75, t1:  null } },
        { caption: 'Курск'             ,  regionID: 16,  distance: 762,  costPerKM: { t20:  25.94, t5:  null, t1:  null } },
        { caption: 'Липецк'            ,  regionID: 15,  distance: 700,  costPerKM: { t20:  25.58, t5:  null, t1:  null } },
        { caption: 'Люберцы'           ,  regionID:  5,  distance: 252,  costPerKM: { t20:  27.46, t5: 18.47, t1:  null } },
        { caption: 'Медное'            ,  regionID:  1,  distance:  21,  costPerKM: { t20:  69.29, t5: 41.68, t1: 39.70 } },
        { caption: 'Муром'             ,  regionID: 10,  distance: 534,  costPerKM: { t20:  26.18, t5:  null, t1:  null } },
        { caption: 'Мытищи'            ,  regionID:  5,  distance: 230,  costPerKM: { t20:  27.82, t5: 18.67, t1:  null } },
        { caption: 'Наро-Фоминск'      ,  regionID:  5,  distance: 298,  costPerKM: { t20:  26.87, t5: 18.14, t1:  null } },
        { caption: 'Нижний Новгород'   ,  regionID:  4,  distance: 639,  costPerKM: { t20:  25.76, t5:  null, t1:  null } },
        { caption: 'Новомосковск'      ,  regionID: 20,  distance: 456,  costPerKM: { t20:  25.76, t5: 17.52, t1:  null } },
        { caption: 'Ногинск'           ,  regionID:  5,  distance: 282,  costPerKM: { t20:  27.05, t5: 18.24, t1:  null } },
        { caption: 'Обнинск'           ,  regionID:  5,  distance: 295,  costPerKM: { t20:  26.90, t5: 18.16, t1:  null } },
        { caption: 'Одинцово'          ,  regionID:  5,  distance: 240,  costPerKM: { t20:  27.65, t5: 18.57, t1:  null } },
        { caption: 'Орел'              ,  regionID: 21,  distance: 592,  costPerKM: { t20:  25.93, t5:  null, t1:  null } },
        { caption: 'Орехово-Зуево'     ,  regionID:  5,  distance: 320,  costPerKM: { t20:  26.65, t5: 18.02, t1:  null } },
        { caption: 'Пенза'             ,  regionID: 22,  distance: 876,  costPerKM: { t20:  25.64, t5:  null, t1:  null } },
        { caption: 'Петрозаводск'      ,  regionID: 23,  distance: 824,  costPerKM: { t20:  25.76, t5:  null, t1:  null } },
        { caption: 'Подольск'          ,  regionID:  5,  distance: 273,  costPerKM: { t20:  27.16, t5: 18.30, t1:  null } },
        { caption: 'Псков'             ,  regionID:  8,  distance: 550,  costPerKM: { t20:  26.11, t5:  null, t1:  null } },
        { caption: 'Пушкино'           ,  regionID:  5,  distance: 241,  costPerKM: { t20:  27.63, t5: 18.56, t1:  null } },
        { caption: 'Раменское'         ,  regionID:  5,  distance: 283,  costPerKM: { t20:  27.04, t5: 18.23, t1:  null } },
        { caption: 'Реутов'            ,  regionID:  5,  distance: 242,  costPerKM: { t20:  27.61, t5: 18.55, t1:  null } },
        { caption: 'Ржев'              ,  regionID:  1,  distance: 162,  costPerKM: { t20:  29.57, t5: 19.64, t1: 17.66 } },
        { caption: 'Рыбинск'           ,  regionID: 24,  distance: 344,  costPerKM: { t20:  26.44, t5: 17.90, t1:  null } },
        { caption: 'Рязань'            ,  regionID: 25,  distance: 431,  costPerKM: { t20:  25.88, t5: 17.59, t1:  null } },
        { caption: 'Саранск'           ,  regionID: 26,  distance: 883,  costPerKM: { t20:  25.62, t5:  null, t1:  null } },
        { caption: 'Сергиев Посад'     ,  regionID:  5,  distance: 250,  costPerKM: { t20:  27.49, t5: 18.48, t1:  null } },
        { caption: 'Серпухов'          ,  regionID:  5,  distance: 334,  costPerKM: { t20:  26.52, t5: 17.95, t1:  null } },
        { caption: 'Смоленск'          ,  regionID: 14,  distance: 445,  costPerKM: { t20:  25.81, t5: 17.55, t1:  null } },
        { caption: 'Старый Оскол'      ,  regionID:  6,  distance: 865,  costPerKM: { t20:  25.66, t5:  null, t1:  null } },
        { caption: 'Ступино'           ,  regionID:  5,  distance: 346,  costPerKM: { t20:  26.42, t5: 17.89, t1:  null } },
        { caption: 'Тамбов'            ,  regionID: 27,  distance: 692,  costPerKM: { t20:  25.60, t5:  null, t1:  null } },
        { caption: 'Торжок'            ,  regionID:  1,  distance:  46,  costPerKM: { t20:  44.49, t5: 27.92, t1: 25.94 } },
        { caption: 'Тула'              ,  regionID: 20,  distance: 411,  costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
        { caption: 'Химки'             ,  regionID:  5,  distance: 211,  costPerKM: { t20:  28.20, t5: 18.88, t1:  null } },
        { caption: 'Чебоксары'         ,  regionID: 28,  distance: 893,  costPerKM: { t20:  25.60, t5:  null, t1:  null } },
        { caption: 'Череповец'         ,  regionID: 11,  distance: 399,  costPerKM: { t20:  26.06, t5: 17.69, t1:  null } },
        { caption: 'Щёлково'           ,  regionID:  5,  distance: 258,  costPerKM: { t20:  27.37, t5: 18.42, t1:  null } },
        { caption: 'Электросталь'      ,  regionID:  5,  distance: 282,  costPerKM: { t20:  27.05, t5: 18.24, t1:  null } },
        { caption: 'Ярославль'         ,  regionID: 24,  distance: 358,  costPerKM: { t20:  26.33, t5: 17.84, t1:  null } }
    ];

    // ### Регионы ###
    data.region = _clctn();
    // Список регионов:
    data.region.LIST = [
        { id:  1, caption: 'Тверская область'      },
        { id:  2, caption: 'Москва'                },
        { id:  3, caption: 'Санкт-Петербург'       },
        { id:  4, caption: 'Нижегородская область' },
        { id:  5, caption: 'Московская область'    },
        { id:  6, caption: 'Белгородская область'  },
        { id:  7, caption: 'Брянская область'      },
        { id:  8, caption: 'Псковская область'     },
        { id:  9, caption: 'Новгородская область'  },
        { id: 10, caption: 'Владимирская область'  },
        { id: 11, caption: 'Вологодская область'   },
        { id: 12, caption: 'Воронежская область'   },
        { id: 13, caption: 'Ленинградская область' },
        { id: 14, caption: 'Смоленская область'    },
        { id: 15, caption: 'Липецкая область'      },
        { id: 16, caption: 'Курская область'       },
        { id: 17, caption: 'Ивановская область'    },
        { id: 18, caption: 'Калужская область'     },
        { id: 19, caption: 'Костромская область'   },
        { id: 20, caption: 'Тульская область'      },
        { id: 21, caption: 'Орловская область'     },
        { id: 22, caption: 'Пензенская область'    },
        { id: 23, caption: 'Республика Карелия'    },
        { id: 24, caption: 'Ярославская область'   },
        { id: 25, caption: 'Рязанская область'     },
        { id: 26, caption: 'Республика Мордовия'   },
        { id: 27, caption: 'Тамбовская область'    },
        { id: 28, caption: 'Республика Чувашия'    },
    ];
    
    // ### Стоимость продукции за кг. в регионах ###
    data.regionalPrice = _clctn();
    // Список:
    data.regionalPrice.LIST = [
    /* Продукция / регион   |         Москва | Санкт-Петербург | Севастополь | Алтайский край | Забайкальский край | Камчатский край | Краснодарский край | Красноярский край | Пермский край | Приморский край | Ставропольский край | Хабаровский край | Амурская область | Архангельская область | Астраханская область | Белгородская область | Брянская область | Владимирская область | Волгоградская область | Вологодская область | Воронежская область | Ивановская область | Иркутская область | Калининградская область | Калужская область | Кемеровская область | Кировская область | Костромская область | Курганская область | Курская область | Ленинградская область | Липецкая область | Магаданская область | Московская область | Мурманская область | Нижегородская область | Новгородская область | Новосибирская область | Омская область | Оренбургская область | Орловская область | Пензенская область | Псковская область | Ростовская область | Рязанская область | Самарская область | Саратовская область | Свердловская область | Смоленская область | Тамбовская область | Тверская область | Томская область |  Тульская область | Тюменская область | Ульяновская область | Челябинская область | Ярославская область | Республика Адыгея | Республика Алтай | Республика Башкортостан | Республика Бурятия | Республика Дагестан | Республика Ингушетия | Республика Кабардино-Балкария | Республика Калмыкия | Республика Карачаево-Черкесия | Республика Карелия | Республика Коми | Республика Крым | Республика Марий Эл | Республика Мордовия | Республика Саха (Якутия) | Республика Северная Осетия-Алания | Республика Татарстан | Республика Тыва | Республика Удмуртия | Республика Хакасия | Республика Чечня | Республика Чувашия | Еврейская автономная область | Ненецкий автономный округ | Ханты-Мансийский автономный округ | Чукотский автономный округ | Ямало-Ненецкий автономный округ */
    /* regionID             |              2 |               3 |             |                |                    |                 |                    |                   |               |                 |                     |                  |                  |                       |                      |                    6 |                7 |                   10 |                       |                  11 |                  12 |                 17 |                   |                         |                18 |                     |                   |                  19 |                    |              16 |                    13 |               15 |                     |                  5 |                    |                     4 |                    9 |                       |                |                      |                21 |                 22 |                 8 |                    |                25 |                   |                     |                      |                 14 |                 27 |                1 |                 |                20 |                   |                     |                     |                  24 |                   |                  |                         |                    |                     |                      |                               |                     |                               |                 23 |                 |                 |                     |                  26 |                          |                                   |                      |                 |                     |                    |                  |                 28 |                              |                           |                                   |                            |                                 */
    /* Картофель, кг        | */ { r2: 32.66,    r3: 31.72, /* |       37.91 |          22.89 |              33.22 |           47.62 |              33.66 |             28.12 |         27.11 |           31.56 |               29.54 |            35.11 |            32.93 |                 33.49 |                28.80 | */         r6: 24.10,         r7: 22.83,        r10: 26.41, /* |                 27.33 | */       r11: 29.71,           r12: 25.07,      r17: 26.26, /* |             30.02 |                  30.06  | */ r18: 27.22, /* |               24.87 |             26.52 | */   r19: 24.66, /* |              21.86 | */   r16: 24.81,             r13: 27.54,    r15: 25.30, /* |               69.82 | */   r5: 28.50, /* |              33.26 | */          r4: 27.02,         r9: 26.72, /* |                 27.61 |          22.62 |                25.79 | */     r21: 25.35,          r22: 23.68,      r8: 23.91, /* |              28.98 | */ r25: 26.34, /* |             26.05 |               24.63 |                26.76 | */      r14: 25.91,          r27: 23.63,     r1: 24.04, /* |           27.21 | */ r20: 25.21, /* |             28.47 |               25.19 |               25.04 | */   r24: 28.51, /* |             28.68 |            25.83 |                   27.15 |              28.64 |               30.92 |                25.22 |                         25.48 |               28.32 |                         29.19 | */  r23: 26.67, /* |           33.97 |           36.44 |               26.42 | */   r26: 23.03, /* |                    55.65 |                             28.69 |                25.34 |           28.55 |               26.25 |              26.42 |            29.94 | */  r28: 25.06, /* |                        28.93 |                     52.45 |                             27.34 |                      96.23 |                           35.12 */ },
    /* Морковь, кг          | */ { r2: 39.72,    r3: 32.49, /* |       33.16 |          29.46 |              51.56 |           66.51 |              34.52 |             37.50 |         27.97 |           52.34 |               29.94 |            58.64 |            62.64 |                 38.26 |                27.05 | */         r6: 25.13,         r7: 26.90,        r10: 29.28, /* |                 27.83 | */       r11: 35.44,           r12: 24.91,      r17: 32.94, /* |             45.52 |                  40.02  | */ r18: 26.16, /* |               30.59 |             28.59 | */   r19: 31.96, /* |              33.01 | */   r16: 25.75,             r13: 32.28,    r15: 26.78, /* |               77.14 | */   r5: 32.39, /* |              34.84 | */          r4: 28.76,         r9: 32.47, /* |                 34.32 |          21.66 |                25.75 | */     r21: 28.75,          r22: 26.39,      r8: 27.30, /* |              31.21 | */ r25: 26.39, /* |             30.72 |               26.50 |                31.86 | */      r14: 31.92,          r27: 26.01,     r1: 30.28, /* |           37.24 | */ r20: 30.09, /* |             36.02 |               29.55 |               26.26 | */   r24: 32.72, /* |             27.46 |            28.12 |                   27.69 |              38.69 |               31.84 |                31.58 |                         30.02 |               30.07 |                         33.84 | */  r23: 35.51, /* |           43.90 |           31.67 |               25.98 | */   r26: 22.96, /* |                    84.22 |                             30.89 |                25.16 |           41.78 |               22.45 |              30.94 |            34.12 | */  r28: 25.73, /* |                        54.82 |                     60.35 |                             30.19 |                     186.41 |                           35.92 */ },
    /* Свёкла столовая, кг  | */ { r2: 26.44,    r3: 24.04, /* |       24.20 |          31.67 |              35.27 |           44.42 |              31.53 |             28.73 |         24.60 |           39.34 |               28.74 |            46.51 |            41.54 |                 38.00 |                27.09 | */         r6: 21.32,         r7: 23.75,        r10: 25.70, /* |                 25.48 | */       r11: 25.03,           r12: 20.96,      r17: 24.79, /* |             29.09 |                  29.60  | */ r18: 22.72, /* |               26.98 |             28.84 | */   r19: 26.69, /* |              21.80 | */   r16: 24.54,             r13: 23.40,    r15: 27.40, /* |               69.12 | */   r5: 24.04, /* |              27.27 | */          r4: 26.25,         r9: 23.76, /* |                 30.87 |          24.06 |                21.91 | */     r21: 29.16,          r22: 27.59,      r8: 21.38, /* |              27.18 | */ r25: 23.40, /* |             26.00 |               23.49 |                25.16 | */      r14: 26.80,          r27: 25.54,     r1: 23.68, /* |           35.69 | */ r20: 25.07, /* |             24.22 |               23.49 |               24.09 | */   r24: 29.10, /* |             24.09 |            32.93 |                   24.58 |              33.30 |               31.50 |                31.31 |                         26.39 |               29.93 |                         29.22 | */  r23: 24.25, /* |           33.38 |           31.26 |               29.88 | */   r26: 23.27, /* |                    71.37 |                             26.47 |                23.49 |           28.66 |               22.66 |              27.81 |            34.76 | */  r28: 22.16, /* |                        43.64 |                     56.10 |                             27.73 |                     224.42 |                           35.90 */ },
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
            var dataProduction = Object.assign({}, data.production.LIST[this.getValueIndex()]);
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
        select: {
            p: d.getElementById('destinationSelect'),
        },
        distance: {
            p: d.getElementById('destinationDistance'),
        },
        region: {
            p: d.getElementById('destinationRegion'),
        },
        switchMode: {
            p: d.getElementById('destinationSwitchMode'),
        },
    };
    // Инициализация поля выбора места назначения:
    handler.destination.select.init = function() {
        var destinationOptionsHTML = '';
        data.destination.LIST.forEach(function(destination, i) {
            destinationOptionsHTML += '<option value="' + i + '">' + destination.caption + '</option>\r\n';
            if (i === 3) destinationOptionsHTML += '<optgroup label="Ещё">\r\n';
        });
        destinationOptionsHTML += '</optgroup>\r\n';
        this.p.innerHTML = destinationOptionsHTML;
        this.getValueIndex = function() {
            return parseInt(this.p.value, 10);
        }.bind(this);
        this.getData = function() {
            return data.destination.LIST[this.getValueIndex()];
        }.bind(this);
        this.getValueDistance = function() {
            return this.getData().distance;
        }.bind(this);
        this.getValueRegionID = function() {
            return this.getData().regionID;
        }.bind(this);
    }.bind(handler.destination.select);
    // Инициализация поля ввода пользовательского расстояния:
    handler.destination.distance.init = function() {
        this.getValue = function() {
            return parseInt(this.p.value, 10);
        }.bind(this);
        this.setValue = function(value) {
            this.p.value = value;
        }.bind(this);
    }.bind(handler.destination.distance);
    // Инициализация поля выбора региона места назначения:
    handler.destination.region.init = function() {
        var optionsHTML = '';
        data.region.LIST.forEach(function(region) {
            optionsHTML += '<option value="' + region.id + '">' + region.caption + '</option>\r\n';
        });
        this.p.innerHTML = optionsHTML;
        this.getValueID = function() {
            return parseInt(this.p.value, 10);
        }.bind(this);
        this.setValueByID = function(id) {
            this.p.value = id;
        }.bind(this);
        this.getRegionalPriceByIndex = function(regionalPriceIndex) {
            var dataRegionalPrice = data.regionalPrice.LIST[regionalPriceIndex];
            if (!dataRegionalPrice) return null;
            return dataRegionalPrice['r' + this.getValueID()] || null;
        }.bind(this);
    }.bind(handler.destination.region);
    // Инициализация интерфейса места назначения:
    handler.destination.init = function() {
        this.select.init();
        this.distance.init();
        this.region.init();
        this.getData = function() {
            return Object.assign({},
                this.select.getData(),
                {
                    distance: this.distance.getValue(),
                }
            );
        }.bind(this);
        // Менять значение distance при смене select:
        this._fillDistanceAndRegion = function() {
            this.distance.setValue(this.select.getValueDistance());
            this.region.setValueByID(this.select.getValueRegionID());
        }.bind(this);
        this.select.p.addEventListener('change', this._fillDistanceAndRegion);
        this._fillDistanceAndRegion();
        // Смена режима (технически расчёты остаются прежними, меняется только видимое состояние элементов ввода):
        this._applyMode = function() {
            this.distance.p.disabled = this.region.p.disabled = !this.switchMode.p.checked;
        }.bind(this);
        this.switchMode.p.addEventListener('change', this._applyMode);
        this._applyMode();
    }.bind(handler.destination);
    handler.destination.init();

    // ### Региональная стоимость ###
    handler.getRegionalPrice = function() {
        return this.destination.region.getRegionalPriceByIndex(this.production.getData().regionalPriceIndex);
    }.bind(handler);

    // ### Итог ###
    handler.result = {
        p: d.getElementById('result'),
        pResultBox: d.getElementById('resultBox'),
        CLASS_NAME_CHECK_ROW: 'calc-UI__check-row',
        CLASS_NAME_CHECK_ROW_IN_TOTAL: 'calc-UI__check-row--in-total',
        CLASS_NAME_CHECK_BLOCK_REGIONAL_PRICE: 'calc-UI__check-block-regional_price',
    };
    handler.result.show = function() {
        this.pResultBox.style.display = '';
    }.bind(handler.result);
    handler.result.getRowHTMLCost = function(caption, cost, inTotal) {
        var className = this.CLASS_NAME_CHECK_ROW + (!inTotal ? '' : ' ' + this.CLASS_NAME_CHECK_ROW_IN_TOTAL);
        return '<p class="' + className + '"><span>' + caption + ': </span><span>' + cost + ' ₽</span></p>';
    }.bind(handler.result);
    handler.result.getRowHTMLProfit = function(price, regionalPrice) {
        var profitHTML = '';
        var needShowRegionalPrice = regionalPrice !== null && regionalPrice > price;
        if (needShowRegionalPrice) {
            var profit = (100 - (price / regionalPrice * 100)).toFixed(2);
            var gksHTML = '(<a href="http://gks.ru" target="_blank" class="calc-UI__link"><abbr title="Федеральная служба государственной статистики">РосСтат</abbr></a>)';
            profitHTML =
               '<div class="' + this.CLASS_NAME_CHECK_BLOCK_REGIONAL_PRICE + '">\n' +
                   this.getRowHTMLCost('Региональная стоимость за кг. ' + gksHTML, regionalPrice) + '\n' +
                   '<p class="' + this.CLASS_NAME_CHECK_ROW + '"><span>Выгода: </span><span>' + profit + '%</span></p>\n' +
               '</div>';
        }
        return profitHTML;
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
            var inTotal = (s1 * 1 + s2 * 1).toFixed(2);
            var regionalPrice = handler.getRegionalPrice();

            handler.result.p.innerHTML =
                handler.result.getRowHTMLCost('Товар', s1) + '\n' +
                handler.result.getRowHTMLCost('Перевозка', s2) + '\n' +
                handler.result.getRowHTMLCost('Итого', inTotal, true) + '\n' +
                handler.result.getRowHTMLProfit(price, regionalPrice);
            (function developmentInfo() {
                var extraInfoConsole = regionalPrice !== null
                    ? 'Региональная стоимость за кг.: ' + regionalPrice + ' ₽\r\n' +
                    'Выгода:                      ' + (100 - (price / regionalPrice * 100)).toFixed(2) + '% (100 - (' + price + ' / ' + regionalPrice + ' * 100))\r\n' +
                    'Выгода с учётом перевозки: ' + (100 - ((inTotal / weight) / regionalPrice * 100)).toFixed(2) + '% (100 - ((' + inTotal + ' / ' + weight + ') / ' + regionalPrice + ' * 100))\r\n'
                    : 'Региональная стоимость за кг.: нет данных.';
                console.group(handler.production.getData().caption);
                console.log(
                    'Товар: ' + s1 + ' ₽ (' + price + ' * ' + weight + ')\r\n' +
                    'Перевозка: ' + s2 + ' ₽ (' + countTransport + ' * ' + dataDestination.distance + ' * 2 * ' + costPerKM + ')\r\n' +
                    'Итого: ' + inTotal + ' ₽\r\n' +
                    extraInfoConsole
                );
                console.groupEnd();
            })();
        });
        var _onceShowResult = function() {
            handler.result.show();
            this.p.removeEventListener('submit', _onceShowResult);
        }.bind(this);
        this.p.addEventListener('submit', _onceShowResult);
    }.bind(handler.form);
    handler.form.init();
})(document);
