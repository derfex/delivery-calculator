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
        { caption: 'Картофель отборный'                         ,  image: 'potato-01.jpg'            ,  regionalPriceIndex:    0,  price: 27.00 },
        { caption: 'Картофель свежий'                           ,  image: 'potato-02.jpg'            ,  regionalPriceIndex:    0,  price: 17.90 },
        { caption: 'Картофель мелкая фракция'                   ,  image: 'potato-03.jpg'            ,  regionalPriceIndex:    0,  price: 10.00 },
        { caption: 'Картофель семенной «Коломбо»'               ,  image: 'potato-04.jpg'            ,  regionalPriceIndex:    0,  price: 28.00 },
        { caption: 'Картофель семенной «Ред Скарлет»'           ,  image: 'potato-05.jpg'            ,  regionalPriceIndex:    0,  price: 25.00 },
        { caption: 'Картофель семенной «Гала»'                  ,  image: 'potato-06.jpg'            ,  regionalPriceIndex:    0,  price: 18.00 },
        { caption: 'Картофель семенной «Рамос»'                 ,  image: 'potato-07.jpg'            ,  regionalPriceIndex:    0,  price: 22.00 },
        { caption: 'Морковь'                                    ,  image: 'carrot-01.jpg'            ,  regionalPriceIndex:    1,  price: 32.00 },
        { caption: 'Свекла отборная'                            ,  image: 'beet-01.jpg'              ,  regionalPriceIndex:    2,  price: 14.50 },
        { caption: 'Свекла'                                     ,  image: 'beet-02.jpg'              ,  regionalPriceIndex:    2,  price:  9.50 },
        { caption: 'Свекла 35+'                                 ,  image: 'beet-03.jpg'              ,  regionalPriceIndex:    2,  price:  5.00 },
        { caption: 'Пшеница'                                    ,  image: 'wheat-01.jpg'             ,  regionalPriceIndex: null,  price: 10.00 },
        { caption: 'Овёс'                                       ,  image: 'oat-01.jpg'               ,  regionalPriceIndex: null,  price: data.production._getOatPrice },
        { caption: 'Овсяно-пшеничная смесь (под заказ)'         ,  image: 'oat-wheat-mixture-01.jpg' ,  regionalPriceIndex: null,  price: 10.00 },
        { caption: 'Капуста'                                    ,  image: 'cabbage-01.jpg'           ,  regionalPriceIndex:    3,  price: 23.00 },
        { caption: 'Горчица'                                    ,  image: 'mustard-01.jpg'           ,  regionalPriceIndex: null,  price: 40.00 },
        { caption: 'Картофель, свекла (валом)'                  ,  image: 'fodder-mixture-01.jpg'    ,  regionalPriceIndex: null,  price:  3.00 },
        { caption: 'Картофель, свекла (кормовая смесь в сетке)' ,  image: 'fodder-mixture-01.jpg'    ,  regionalPriceIndex: null,  price:  5.00 },
        { caption: 'Кормовая смесь (морковь)'                   ,  image: 'fodder-mixture-02.jpg'    ,  regionalPriceIndex: null,  price:  3.50 }
    ];

    // ### Места назначения ###
    data.destination = _clctn();
    // Список мест назначения:
    data.destination.LIST = [
        { caption: 'Лихославль'        ,  regionID: 69,  distance:   7,  costPerKM: { t20: 160.55, t5: 92.33, t1: 90.35 } },
        { caption: 'Тверь'             ,  regionID: 69,  distance:  60,  costPerKM: { t20:  39.63, t5: 25.22, t1: 23.24 } },
        { caption: 'Москва'            ,  regionID: 77,  distance: 228,  costPerKM: { t20:  27.86, t5: 18.69, t1:  null } },
        { caption: 'Санкт-Петербург'   ,  regionID: 78,  distance: 532,  costPerKM: { t20:  26.19, t5:  null, t1:  null } },
        { caption: 'Арзамас'           ,  regionID: 52,  distance: 695,  costPerKM: { t20:  25.59, t5:  null, t1:  null } },
        { caption: 'Балашиха'          ,  regionID: 50,  distance: 248,  costPerKM: { t20:  27.52, t5: 18.50, t1:  null } },
        { caption: 'Белгород'          ,  regionID: 31,  distance: 898,  costPerKM: { t20:  25.59, t5:  null, t1:  null } },
        { caption: 'Бологое'           ,  regionID: 69,  distance: 161,  costPerKM: { t20:  29.61, t5: 19.66, t1: 17.68 } },
        { caption: 'Брянск'            ,  regionID: 32,  distance: 557,  costPerKM: { t20:  26.07, t5:  null, t1:  null } },
        { caption: 'Великие Луки'      ,  regionID: 60,  distance: 410,  costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
        { caption: 'Великий Новгород'  ,  regionID: 53,  distance: 335,  costPerKM: { t20:  26.52, t5: 17.94, t1:  null } },
        { caption: 'Владимир'          ,  regionID: 33,  distance: 410,  costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
        { caption: 'Вологда'           ,  regionID: 35,  distance: 516,  costPerKM: { t20:  26.27, t5:  null, t1:  null } },
        { caption: 'Воронеж'           ,  regionID: 36,  distance: 757,  costPerKM: { t20:  25.95, t5:  null, t1:  null } },
        { caption: 'Воскресенск'       ,  regionID: 50,  distance: 330,  costPerKM: { t20:  26.56, t5: 17.97, t1:  null } },
        { caption: 'Выборг'            ,  regionID: 47,  distance: 648,  costPerKM: { t20:  25.73, t5:  null, t1:  null } },
        { caption: 'Вышний Волочок'    ,  regionID: 69,  distance: 114,  costPerKM: { t20:  32.06, t5: 21.02, t1: 19.04 } },
        { caption: 'Вязьма'            ,  regionID: 67,  distance: 285,  costPerKM: { t20:  27.02, t5: 18.22, t1:  null } },
        { caption: 'Дзержинск'         ,  regionID: 52,  distance: 619,  costPerKM: { t20:  25.83, t5:  null, t1:  null } },
        { caption: 'Долгопрудный'      ,  regionID: 50,  distance: 216,  costPerKM: { t20:  28.09, t5: 18.82, t1:  null } },
        { caption: 'Домодедово'        ,  regionID: 50,  distance: 274,  costPerKM: { t20:  27.15, t5: 18.30, t1:  null } },
        { caption: 'Дубна'             ,  regionID: 50,  distance: 163,  costPerKM: { t20:  29.53, t5: 19.62, t1: 17.64 } },
        { caption: 'Егорьевск'         ,  regionID: 50,  distance: 365,  costPerKM: { t20:  26.28, t5: 17.81, t1:  null } },
        { caption: 'Елец'              ,  regionID: 48,  distance: 626,  costPerKM: { t20:  25.81, t5:  null, t1:  null } },
        { caption: 'Железногорск'      ,  regionID: 46,  distance: 694,  costPerKM: { t20:  25.60, t5:  null, t1:  null } },
        { caption: 'Железнодорожный'   ,  regionID: 50,  distance: 256,  costPerKM: { t20:  27.40, t5: 18.43, t1:  null } },
        { caption: 'Жуковский'         ,  regionID: 50,  distance: 278,  costPerKM: { t20:  27.10, t5: 18.27, t1:  null } },
        { caption: 'Зеленоград'        ,  regionID: 50,  distance: 193,  costPerKM: { t20:  28.62, t5: 19.11, t1: 17.13 } },
        { caption: 'Иваново'           ,  regionID: 37,  distance: 451,  costPerKM: { t20:  25.78, t5: 17.53, t1:  null } },
        { caption: 'Калуга'            ,  regionID: 40,  distance: 371,  costPerKM: { t20:  26.24, t5: 17.79, t1:  null } },
        { caption: 'Клин'              ,  regionID: 69,  distance: 113,  costPerKM: { t20:  32.13, t5: 21.06, t1: 19.08 } },
        { caption: 'Ковров'            ,  regionID: 33,  distance: 488,  costPerKM: { t20:  25.62, t5: 17.45, t1:  null } },
        { caption: 'Коломна'           ,  regionID: 50,  distance: 345,  costPerKM: { t20:  26.43, t5: 17.90, t1:  null } },
        { caption: 'Королёв'           ,  regionID: 50,  distance: 235,  costPerKM: { t20:  27.73, t5: 18.62, t1:  null } },
        { caption: 'Кострома'          ,  regionID: 44,  distance: 461,  costPerKM: { t20:  25.73, t5: 17.51, t1:  null } },
        { caption: 'Красногорск'       ,  regionID: 50,  distance: 222,  costPerKM: { t20:  27.97, t5: 18.75, t1:  null } },
        { caption: 'Курск'             ,  regionID: 46,  distance: 762,  costPerKM: { t20:  25.94, t5:  null, t1:  null } },
        { caption: 'Липецк'            ,  regionID: 48,  distance: 700,  costPerKM: { t20:  25.58, t5:  null, t1:  null } },
        { caption: 'Люберцы'           ,  regionID: 50,  distance: 252,  costPerKM: { t20:  27.46, t5: 18.47, t1:  null } },
        { caption: 'Медное'            ,  regionID: 69,  distance:  21,  costPerKM: { t20:  69.29, t5: 41.68, t1: 39.70 } },
        { caption: 'Муром'             ,  regionID: 33,  distance: 534,  costPerKM: { t20:  26.18, t5:  null, t1:  null } },
        { caption: 'Мытищи'            ,  regionID: 50,  distance: 230,  costPerKM: { t20:  27.82, t5: 18.67, t1:  null } },
        { caption: 'Наро-Фоминск'      ,  regionID: 50,  distance: 298,  costPerKM: { t20:  26.87, t5: 18.14, t1:  null } },
        { caption: 'Нижний Новгород'   ,  regionID: 52,  distance: 639,  costPerKM: { t20:  25.76, t5:  null, t1:  null } },
        { caption: 'Новомосковск'      ,  regionID: 71,  distance: 456,  costPerKM: { t20:  25.76, t5: 17.52, t1:  null } },
        { caption: 'Ногинск'           ,  regionID: 50,  distance: 282,  costPerKM: { t20:  27.05, t5: 18.24, t1:  null } },
        { caption: 'Обнинск'           ,  regionID: 50,  distance: 295,  costPerKM: { t20:  26.90, t5: 18.16, t1:  null } },
        { caption: 'Одинцово'          ,  regionID: 50,  distance: 240,  costPerKM: { t20:  27.65, t5: 18.57, t1:  null } },
        { caption: 'Орел'              ,  regionID: 57,  distance: 592,  costPerKM: { t20:  25.93, t5:  null, t1:  null } },
        { caption: 'Орехово-Зуево'     ,  regionID: 50,  distance: 320,  costPerKM: { t20:  26.65, t5: 18.02, t1:  null } },
        { caption: 'Пенза'             ,  regionID: 58,  distance: 876,  costPerKM: { t20:  25.64, t5:  null, t1:  null } },
        { caption: 'Петрозаводск'      ,  regionID: 10,  distance: 824,  costPerKM: { t20:  25.76, t5:  null, t1:  null } },
        { caption: 'Подольск'          ,  regionID: 50,  distance: 273,  costPerKM: { t20:  27.16, t5: 18.30, t1:  null } },
        { caption: 'Псков'             ,  regionID: 60,  distance: 550,  costPerKM: { t20:  26.11, t5:  null, t1:  null } },
        { caption: 'Пушкино'           ,  regionID: 50,  distance: 241,  costPerKM: { t20:  27.63, t5: 18.56, t1:  null } },
        { caption: 'Раменское'         ,  regionID: 50,  distance: 283,  costPerKM: { t20:  27.04, t5: 18.23, t1:  null } },
        { caption: 'Реутов'            ,  regionID: 50,  distance: 242,  costPerKM: { t20:  27.61, t5: 18.55, t1:  null } },
        { caption: 'Ржев'              ,  regionID: 69,  distance: 162,  costPerKM: { t20:  29.57, t5: 19.64, t1: 17.66 } },
        { caption: 'Рыбинск'           ,  regionID: 76,  distance: 344,  costPerKM: { t20:  26.44, t5: 17.90, t1:  null } },
        { caption: 'Рязань'            ,  regionID: 62,  distance: 431,  costPerKM: { t20:  25.88, t5: 17.59, t1:  null } },
        { caption: 'Саранск'           ,  regionID: 13,  distance: 883,  costPerKM: { t20:  25.62, t5:  null, t1:  null } },
        { caption: 'Сергиев Посад'     ,  regionID: 50,  distance: 250,  costPerKM: { t20:  27.49, t5: 18.48, t1:  null } },
        { caption: 'Серпухов'          ,  regionID: 50,  distance: 334,  costPerKM: { t20:  26.52, t5: 17.95, t1:  null } },
        { caption: 'Смоленск'          ,  regionID: 67,  distance: 445,  costPerKM: { t20:  25.81, t5: 17.55, t1:  null } },
        { caption: 'Старый Оскол'      ,  regionID: 31,  distance: 865,  costPerKM: { t20:  25.66, t5:  null, t1:  null } },
        { caption: 'Ступино'           ,  regionID: 50,  distance: 346,  costPerKM: { t20:  26.42, t5: 17.89, t1:  null } },
        { caption: 'Тамбов'            ,  regionID: 68,  distance: 692,  costPerKM: { t20:  25.60, t5:  null, t1:  null } },
        { caption: 'Торжок'            ,  regionID: 69,  distance:  46,  costPerKM: { t20:  44.49, t5: 27.92, t1: 25.94 } },
        { caption: 'Тула'              ,  regionID: 71,  distance: 411,  costPerKM: { t20:  25.99, t5: 17.65, t1:  null } },
        { caption: 'Химки'             ,  regionID: 50,  distance: 211,  costPerKM: { t20:  28.20, t5: 18.88, t1:  null } },
        { caption: 'Чебоксары'         ,  regionID: 21,  distance: 893,  costPerKM: { t20:  25.60, t5:  null, t1:  null } },
        { caption: 'Череповец'         ,  regionID: 35,  distance: 399,  costPerKM: { t20:  26.06, t5: 17.69, t1:  null } },
        { caption: 'Щёлково'           ,  regionID: 50,  distance: 258,  costPerKM: { t20:  27.37, t5: 18.42, t1:  null } },
        { caption: 'Электросталь'      ,  regionID: 50,  distance: 282,  costPerKM: { t20:  27.05, t5: 18.24, t1:  null } },
        { caption: 'Ярославль'         ,  regionID: 76,  distance: 358,  costPerKM: { t20:  26.33, t5: 17.84, t1:  null } }
    ];

    // ### Регионы ###
    data.region = _clctn();
    // Список регионов:
    data.region.LIST = [
        { id: 69, caption: 'Тверская область'                  },
        { id: 77, caption: 'Москва'                            },
        { id: 50, caption: 'Московская область'                },
        { id: 78, caption: 'Санкт-Петербург'                   },
        { id: 47, caption: 'Ленинградская область'             },
        { id: 22, caption: 'Алтайский край'                    },
        { id: 28, caption: 'Амурская область'                  },
        { id: 29, caption: 'Архангельская область'             },
        { id: 30, caption: 'Астраханская область'              },
        { id: 31, caption: 'Белгородская область'              },
        { id: 32, caption: 'Брянская область'                  },
        { id: 33, caption: 'Владимирская область'              },
        { id: 34, caption: 'Волгоградская область'             },
        { id: 35, caption: 'Вологодская область'               },
        { id: 36, caption: 'Воронежская область'               },
        { id: 79, caption: 'Еврейская автономная область'      },
        { id: 75, caption: 'Забайкальский край'                },
        { id: 37, caption: 'Ивановская область'                },
        { id: 38, caption: 'Иркутская область'                 },
        { id: 39, caption: 'Калининградская область'           },
        { id: 40, caption: 'Калужская область'                 },
        { id: 41, caption: 'Камчатский край'                   },
        { id: 42, caption: 'Кемеровская область'               },
        { id: 43, caption: 'Кировская область'                 },
        { id: 44, caption: 'Костромская область'               },
        { id: 23, caption: 'Краснодарский край'                },
        { id: 24, caption: 'Красноярский край'                 },
        { id: 45, caption: 'Курганская область'                },
        { id: 46, caption: 'Курская область'                   },
        { id: 48, caption: 'Липецкая область'                  },
        { id: 49, caption: 'Магаданская область'               },
        { id: 51, caption: 'Мурманская область'                },
        { id: 83, caption: 'Ненецкий автономный округ'         },
        { id: 52, caption: 'Нижегородская область'             },
        { id: 53, caption: 'Новгородская область'              },
        { id: 54, caption: 'Новосибирская область'             },
        { id: 55, caption: 'Омская область'                    },
        { id: 56, caption: 'Оренбургская область'              },
        { id: 57, caption: 'Орловская область'                 },
        { id: 58, caption: 'Пензенская область'                },
        { id: 59, caption: 'Пермский край'                     },
        { id: 25, caption: 'Приморский край'                   },
        { id: 60, caption: 'Псковская область'                 },
        { id:  1, caption: 'Республика Адыгея'                 },
        { id:  4, caption: 'Республика Алтай'                  },
        { id:  2, caption: 'Республика Башкортостан'           },
        { id:  3, caption: 'Республика Бурятия'                },
        { id:  5, caption: 'Республика Дагестан'               },
        { id:  6, caption: 'Республика Ингушетия'              },
        { id:  7, caption: 'Республика Кабардино-Балкария'     },
        { id:  8, caption: 'Республика Калмыкия'               },
        { id:  9, caption: 'Республика Карачаево-Черкесия'     },
        { id: 10, caption: 'Республика Карелия'                },
        { id: 11, caption: 'Республика Коми'                   },
        { id: 91, caption: 'Республика Крым'                   },
        { id: 12, caption: 'Республика Марий Эл'               },
        { id: 13, caption: 'Республика Мордовия'               },
        { id: 14, caption: 'Республика Саха (Якутия)'          },
        { id: 15, caption: 'Республика Северная Осетия-Алания' },
        { id: 16, caption: 'Республика Татарстан'              },
        { id: 17, caption: 'Республика Тыва'                   },
        { id: 18, caption: 'Республика Удмуртия'               },
        { id: 19, caption: 'Республика Хакасия'                },
        { id: 20, caption: 'Республика Чечня'                  },
        { id: 21, caption: 'Республика Чувашия'                },
        { id: 61, caption: 'Ростовская область'                },
        { id: 62, caption: 'Рязанская область'                 },
        { id: 63, caption: 'Самарская область'                 },
        { id: 64, caption: 'Саратовская область'               },
        { id: 65, caption: 'Сахалинская область'               },
        { id: 66, caption: 'Свердловская область'              },
        { id: 92, caption: 'Севастополь'                       },
        { id: 67, caption: 'Смоленская область'                },
        { id: 26, caption: 'Ставропольский край'               },
        { id: 68, caption: 'Тамбовская область'                },
        { id: 70, caption: 'Томская область'                   },
        { id: 71, caption: 'Тульская область'                  },
        { id: 72, caption: 'Тюменская область'                 },
        { id: 73, caption: 'Ульяновская область'               },
        { id: 27, caption: 'Хабаровский край'                  },
        { id: 86, caption: 'Ханты-Мансийский автономный округ' },
        { id: 74, caption: 'Челябинская область'               },
        { id: 87, caption: 'Чукотский автономный округ'        },
        { id: 89, caption: 'Ямало-Ненецкий автономный округ'   },
        { id: 76, caption: 'Ярославская область'               },
    ];

    // ### Стоимость продукции за кг. в регионах ###
    data.regionalPrice = _clctn();
    // Список:
    data.regionalPrice.LIST = [
    /* Продукция / регион   | Тверская область |     Москва | Санкт-Петербург | Московская область | Ленинградская область | Севастополь | Алтайский край | Забайкальский край | Камчатский край | Краснодарский край | Красноярский край | Пермский край | Приморский край | Ставропольский край | Хабаровский край | Амурская область | Архангельская область | Астраханская область | Белгородская область | Брянская область | Владимирская область | Волгоградская область | Вологодская область | Воронежская область | Ивановская область | Иркутская область | Калининградская область | Калужская область | Кемеровская область | Кировская область | Костромская область | Курганская область | Курская область | Липецкая область | Магаданская область | Мурманская область | Нижегородская область | Новгородская область | Новосибирская область | Омская область | Оренбургская область | Орловская область | Пензенская область | Псковская область | Ростовская область | Рязанская область | Самарская область | Саратовская область | Сахалинская область | Свердловская область | Смоленская область | Тамбовская область | Томская область |  Тульская область | Тюменская область | Ульяновская область | Челябинская область | Ярославская область | Республика Адыгея | Республика Алтай | Республика Башкортостан | Республика Бурятия | Республика Дагестан | Республика Ингушетия | Республика Кабардино-Балкария | Республика Калмыкия | Республика Карачаево-Черкесия | Республика Карелия | Республика Коми | Республика Крым | Республика Марий Эл | Республика Мордовия | Республика Саха (Якутия) | Республика Северная Осетия-Алания | Республика Татарстан | Республика Тыва | Республика Удмуртия | Республика Хакасия | Республика Чечня | Республика Чувашия | Еврейская автономная область | Ненецкий автономный округ | Ханты-Мансийский автономный округ | Чукотский автономный округ | Ямало-Ненецкий автономный округ */
    /* regionID             |               69 |         77 |              78 |                 50 |                    47 |             |                |                    |                 |                    |                   |               |                 |                     |                  |                  |                       |                      |                   31 |               32 |                   33 |                       |                  35 |                  36 |                 37 |                   |                         |                40 |                     |                   |                  44 |                    |              46 |               48 |                     |                    |                    52 |                   53 |                       |                |                      |                57 |                 58 |                60 |                    |                62 |                   |                     |                     |                      |                 67 |                 68 |                 |                71 |                   |                     |                     |                  76 |                   |                  |                         |                    |                     |                      |                               |                     |                               |                 10 |                 |                 |                     |                  13 |                          |                                   |                      |                 |                     |                    |                  |                 21 |                              |                           |                                   |                            |                                 */
    /* Картофель, кг        | */ {  r69: 24.04,  r77: 32.66,       r78: 31.72,          r50: 28.50,         r47: 27.54, /* |       37.91 |          22.89 |              33.22 |           47.62 |              33.66 |             28.12 |         27.11 |           31.56 |               29.54 |            35.11 |            32.93 |                 33.49 |                28.80 | */        r31: 24.10,        r32: 22.83,        r33: 26.41, /* |                 27.33 | */       r35: 29.71,           r36: 25.07,      r37: 26.26, /* |             30.02 |                  30.06  | */ r40: 27.22, /* |               24.87 |             26.52 | */   r44: 24.66, /* |              21.86 | */   r46: 24.81,    r48: 25.30, /* |               69.82 |              33.26 | */         r52: 27.02,        r53: 26.72, /* |                 27.61 |          22.62 |                25.79 | */     r57: 25.35,          r58: 23.68,     r60: 23.91, /* |              28.98 | */ r62: 26.34, /* |             26.05 |               24.63 |               33,54 |                26.76 | */      r67: 25.91,      r68: 23.63, /* |           27.21 | */ r71: 25.21, /* |             28.47 |               25.19 |               25.04 | */   r76: 28.51, /* |             28.68 |            25.83 |                   27.15 |              28.64 |               30.92 |                25.22 |                         25.48 |               28.32 |                         29.19 | */  r10: 26.67, /* |           33.97 |           36.44 |               26.42 | */   r13: 23.03, /* |                    55.65 |                             28.69 |                25.34 |           28.55 |               26.25 |              26.42 |            29.94 | */  r21: 25.06, /* |                        28.93 |                     52.45 |                             27.34 |                      96.23 |                           35.12 */ },
    /* Морковь, кг          | */ {  r69: 30.28,  r77: 39.72,       r78: 32.49,          r50: 32.39,         r47: 32.28, /* |       33.16 |          29.46 |              51.56 |           66.51 |              34.52 |             37.50 |         27.97 |           52.34 |               29.94 |            58.64 |            62.64 |                 38.26 |                27.05 | */        r31: 25.13,        r32: 26.90,        r33: 29.28, /* |                 27.83 | */       r35: 35.44,           r36: 24.91,      r37: 32.94, /* |             45.52 |                  40.02  | */ r40: 26.16, /* |               30.59 |             28.59 | */   r44: 31.96, /* |              33.01 | */   r46: 25.75,    r48: 26.78, /* |               77.14 |              34.84 | */         r52: 28.76,        r53: 32.47, /* |                 34.32 |          21.66 |                25.75 | */     r57: 28.75,          r58: 26.39,     r60: 27.30, /* |              31.21 | */ r62: 26.39, /* |             30.72 |               26.50 |               51,37 |                31.86 | */      r67: 31.92,      r68: 26.01, /* |           37.24 | */ r71: 30.09, /* |             36.02 |               29.55 |               26.26 | */   r76: 32.72, /* |             27.46 |            28.12 |                   27.69 |              38.69 |               31.84 |                31.58 |                         30.02 |               30.07 |                         33.84 | */  r10: 35.51, /* |           43.90 |           31.67 |               25.98 | */   r13: 22.96, /* |                    84.22 |                             30.89 |                25.16 |           41.78 |               22.45 |              30.94 |            34.12 | */  r21: 25.73, /* |                        54.82 |                     60.35 |                             30.19 |                     186.41 |                           35.92 */ },
    /* Свёкла столовая, кг  | */ {  r69: 23.68,  r77: 26.44,       r78: 24.04,          r50: 24.04,         r47: 23.40, /* |       24.20 |          31.67 |              35.27 |           44.42 |              31.53 |             28.73 |         24.60 |           39.34 |               28.74 |            46.51 |            41.54 |                 38.00 |                27.09 | */        r31: 21.32,        r32: 23.75,        r33: 25.70, /* |                 25.48 | */       r35: 25.03,           r36: 20.96,      r37: 24.79, /* |             29.09 |                  29.60  | */ r40: 22.72, /* |               26.98 |             28.84 | */   r44: 26.69, /* |              21.80 | */   r46: 24.54,    r48: 27.40, /* |               69.12 |              27.27 | */         r52: 26.25,        r53: 23.76, /* |                 30.87 |          24.06 |                21.91 | */     r57: 29.16,          r58: 27.59,     r60: 21.38, /* |              27.18 | */ r62: 23.40, /* |             26.00 |               23.49 |               37,80 |                25.16 | */      r67: 26.80,      r68: 25.54, /* |           35.69 | */ r71: 25.07, /* |             24.22 |               23.49 |               24.09 | */   r76: 29.10, /* |             24.09 |            32.93 |                   24.58 |              33.30 |               31.50 |                31.31 |                         26.39 |               29.93 |                         29.22 | */  r10: 24.25, /* |           33.38 |           31.26 |               29.88 | */   r13: 23.27, /* |                    71.37 |                             26.47 |                23.49 |           28.66 |               22.66 |              27.81 |            34.76 | */  r21: 22.16, /* |                        43.64 |                     56.10 |                             27.73 |                     224.42 |                           35.90 */ },
    /* Капуста, кг          | */ {  r69: 19.92,  r77: 25.18,       r78: 22.54,          r50: 21.64,         r47: 21.85, /* |       28.22 |          19.50 |              22.90 |           52.85 |              23.08 |             18.36 |         22.33 |           37.82 |               19.95 |            33.60 |            35.18 |                 28.69 |                19.11 | */        r31: 17.49,        r32: 20.49,        r33: 20.29, /* |                 18.36 | */       r35: 23.39,           r36: 18.56,      r37: 18.32, /* |             20.34 |                  28.27  | */ r40: 21.17, /* |               19.42 |             19.34 | */   r44: 19.24, /* |              20.22 | */   r46: 20.30,    r48: 16.62, /* |               69.28 |              25.20 | */         r52: 20.40,        r53: 20.97, /* |                 21.31 |          18.82 |                19.59 | */     r57: 22.30,          r58: 17.79,     r60: 19.44, /* |              20.15 | */ r62: 19.79, /* |             18.34 |               17.40 |               30.78 |                21.81 | */      r67: 22.35,      r68: 18.08, /* |           21.61 | */ r71: 19.75, /* |             19.00 |               17.59 |               20.12 | */   r76: 23.37, /* |             21.22 |            22.98 |                   19.84 |              18.65 |               19.00 |                23.23 |                         17.40 |               20.08 |                         19.40 | */  r10: 20.85, /* |           27.68 |           30.45 |               17.31 | */   r13: 17.64, /* |                    60.07 |                             17.55 |                17.86 |           19.96 |               17.32 |              18.21 |            21.70 | */  r21: 19.76, /* |                        34.86 |                     51.54 |                             17.99 |                     185.75 |                           32.30 */ },
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
        data.region.LIST.forEach(function(region, i) {
            optionsHTML += '<option value="' + region.id + '">' + region.caption + '</option>\r\n';
            if (i === 4) optionsHTML += '<optgroup label="Ещё">\r\n';
        });
        optionsHTML += '</optgroup>\r\n';
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
