// import { ICarShop } from '../interfaces/car-shop';

// export const carShops: ICarShop[] = [
// 	{
// 		id: 31,
// 		name: "av.by",
// 		car: {
// 			img: "http://all-auto.org/wp-content/uploads/2017/06/Moskvich-403-6.jpg",
// 			age: 1964,
// 			color: 'green',
// 			brand: 'Москвич',
// 			description: 'продаеться москвич с новым мотором коробка передач после кап ремонта.',
// 			price: 9600,
// 			model: '403',
// 		}
// 	},
// 	{
// 		id: 0,
// 		name: "BestBuy",
// 		car: {
// 			img: "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/
// ford/nameplate/focus/2018/collections/ad_planners/18_frd_fcs_4dr_se_whgd.jpg/
// _jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
// 			age: 1980,
// 			color: 'red',
// 			brand: 'ford',
// 			description: 'sedan',
// 			price: 999,
// 			model: 'focus',
// 		}
// 	},
// 	{
// 		id: 1,
// 		name: "audi.by",
// 		car: {
// 			img: "https://audi-kiev.com.ua/content/uploads/a3_sportback_Y1Y1_C7M.jpg",
// 			age: 2018,
// 			color: "красный",
// 			brand: "Audi",
// 			description: `Стремительные контуры крыши подчеркивают спортивный характер этой пятидверной модели.`,
// 			price: 27000,
// 			model: "A3 Sportback"
// 		}
// 	},
// 	{
// 		id: 2,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/models/a4/
// a4-limousine/my-2016/visualizer/1920x728-preview-final/Audi_A4NF_Limo_6V6V_40R_H264_1920x728.jpg",
// 			age: 2018,
// 			color: "коричневый",
// 			brand: "Audi",
// 			description: "Еще более мощный, более эффективный и более интеллектуальный автомобиль.",
// 			price: 30000,
// 			model: "A4"
// 		}
// 	},
// 	{
// 		id: 3,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/ru/models/a4/a4/
// my-2016/563x317_editorial-teaser/563x317_AA4_L_151014.jpg",
// 			age: 2018,
// 			color: "желтый",
// 			brand: "Audi",
// 			description: "Компания Audi представляет новую модель A5 Sportback.",
// 			price: 41000,
// 			model: "A4 Sportback"
// 		}
// 	},
// 	{
// 		id: 4,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/ru/models/a6/a6/
// my-2018/1920x1080-inline-media-gallery/1920x1080_CLASSIC_M01_SEDAN_COMP_09_FINAL_FLAT.jpg?downsize=1920px:*",
// 			age: 2018,
// 			color: "темно-серый",
// 			brand: "Audi",
// 			description: "Дизайн дополняет динамику, стиль подчеркивает спортивный характер.",
// 			price: 40000,
// 			model: "A6"
// 		}
// 	},
// 	{
// 		id: 5,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/by/Models/A7/new-a7-sportback/
// my-2018/1920x1080-inline-media-gallery/1920x1080_InlineMediaGalerie_Modul3_AA7_171022.jpg?downsize=1920px:*",
// 			age: 2018,
// 			color: "красный",
// 			brand: "Audi",
// 			description: "Audi A7 Sportback - уникальный автомобиль.",
// 			price: 56000,
// 			model: "A7 Sportback"
// 		}
// 	},
// 	{
// 		id: 6,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/ru/models/a8/a8-l/
// my-2018/1920x1080_InlineMediaGallery_AA8_171005.jpg?downsize=1920px:*",
// 			age: 2018,
// 			color: "бежевый",
// 			brand: "Audi",
// 			description: "Дизайн Audi A8 L — это воплощение изысканности и динамичности.",
// 			price: 86000,
// 			model: "A8 L"
// 		}
// 	},
// 	{
// 		id: 7,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/models/q3/q3/my-2019/
// 1920x1080-inline-media-gallery/1920x1080-AQ3_181004.jpg?downsize=1920px:*",
// 			age: 2018,
// 			color: "оранжевый",
// 			brand: "Audi",
// 			description: "Новый Audi Q3 — универсальный семейный кроссовер, наделенный различными талантами.",
// 			price: 34000,
// 			model: "Q3"
// 		}
// 	},
// 	{
// 		id: 8,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/models/q5/q5/
// my-2017-nf/563x317-editorial-teaser/563x317_AQ5_161004.jpg",
// 			age: 2018,
// 			color: "синий",
// 			brand: "Audi",
// 			description: "Новый Audi Q5 снова устанавливает более высокие стандарты в своем классе",
// 			price: 50000,
// 			model: "Q5"
// 		}
// 	},
// 	{
// 		id: 9,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/ru/models/q7/q7/my-2017/
// 563x317-editorial-teaser/563x317_AQ7_151013.jpg",
// 			age: 2018,
// 			color: "металик",
// 			brand: "Audi",
// 			description: "Audi Q7 – это результат воплощения амбициозной идеи непрерывного совершенствования.",
// 			price: 65000,
// 			model: "Q7"
// 		}

// 	},
// 	{
// 		id: 10,
// 		name: "audi.by",
// 		car: {
// 			img: "https://www.audi.by/content/dam/nemo/ru/models/r8/r8-coupe/
// my-2017/563x317-editorial-teaser/563x317_AR8_151005_1.jpg",
// 			age: 2018,
// 			color: "красный",
// 			brand: "Audi",
// 			description: "Audi R8 V10 plus обеспечивает потрясающую мощность.",
// 			price: 240000,
// 			model: "R8"
// 		}
// 	},
// 	{
// 		id: 21,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/
// submodels/bmw_m8-gran-coupe_bmw-concept-m8-gran-coupe_2018-1532968589970.jpg",
// 			age: 2019,
// 			color: "темно-зеленый",
// 			brand: "BMW",
// 			description: "Новинка! Скоро во всех наших магазинах!",
// 			price: 150000,
// 			model: "M5"
// 		}
// 	},
// 	{
// 		id: 22,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q3/
//          669461/2017-bmw-m240i-coupe-automatic-tested-review-car-and-driver-
// photo-670913-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*",
// 			age: 2008,
// 			color: "белый",
// 			brand: "BMW",
// 			description: `"Необузданный, динамичный, разгон с места до «сотни» за 4,8 секунды."`,
// 			price: 50000,
// 			model: "M240i"
// 		}
// 	},
// 	{
// 		id: 23,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://oxvo.ru/wp-content/uploads/2017/05/BMW-M550i-Xdrive-G30.jpg",
// 			age: 2005,
// 			color: "черный",
// 			brand: "BMW",
// 			description: `"Ваши нервы на пределе: с моделью M Performance BMW 5 серии Седан вы раздвинете границы возможного.
// 			Чистый адреналин. Спортивный характер превращается в гоночный. Потому что вам нужно больше, чем достаточно."`,
// 			price: 55000,
// 			model: "M550i"
// 		}
// 	},
// 	{
// 		id: 24,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://cdn.motor1.com/images/mgl/OEEbe/s1/bmw-m760li-xdrive.jpg",
// 			age: 2005,
// 			color: "красный",
// 			brand: "BMW",
// 			description: `"Впервые в истории подразделение BMW M GmbH представляет модели M Performance"`,
// 			price: 60000,
// 			model: "M760Li"
// 		},
// 	},
// 	{
// 		id: 25,
// 		name: "BMW-shop",
// 		car: {
// 			img: "http://carrrsmag.com/data_images/models/bmw-x6-m/bmw-x6-m-05.jpg",
// 			age: 2005,
// 			color: "бирюзовый",
// 			brand: "BMW",
// 			description: `"Мощный и атлетичный. Солидный как все модели серии X и спортивный как все купе."`,
// 			price: 60000,
// 			model: "Х5"
// 		}
// 	},
// 	{
// 		id: 26,
// 		name: "BMW-shop",
// 		car: {
// 			img: "http://www.allcarz.ru/wp-content/uploads/2014/08/foto-x1-f48_07-650x433.jpg",
// 			age: 2005,
// 			color: "белый",
// 			brand: "BMW",
// 			description: `"BMW X1 — идеальный выбор для тех, кто стремится интерпретировать"`,
// 			price: 65000,
// 			model: "Х1"
// 		}
// 	},
// 	{
// 		id: 27,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://wroom.ru/i/cars2/bmw_x3_3.jpg",
// 			age: 2001,
// 			color: "синий",
// 			brand: "BMW",
// 			description: `"Новый BMW X3 – это символ безграничных возможностей и воплощение безудержной мощи"`,
// 			price: 77000,
// 			model: "Х3"
// 		}
// 	},
// 	{
// 		id: 28,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://s.auto.drom.ru/i24196/c/photos/fullsize/bmw/m6/bmw_m6_478184.jpg",
// 			age: 2001,
// 			color: "красный",
// 			brand: "BMW",
// 			description: `"Как выразить страсть? Можно попробовать с помощью цифр."`,
// 			price: 80000,
// 			model: "M6"
// 		}
// 	},
// 	{
// 		id: 29,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/2017/12/bmw_i3s_028.jpg",
// 			age: 2003,
// 			color: "красно/черный",
// 			brand: "BMW",
// 			description: `"Присоединяйтесь и испытывайте будущее на кончиках ваших пальцев."`,
// 			price: 95000,
// 			model: "i3"
// 		}
// 	},
// 	{
// 		id: 30,
// 		name: "BMW-shop",
// 		car: {
// 			img: "https://3-photos7.motorcar.com/new-2019-bmw-i8-2drcpe-7551-17827254-1-1024.jpg",
// 			age: 2018,
// 			color: "черный",
// 			brand: "BMW",
// 			description: `"Будущее обретает форму — и это форма нового BMW i8 Купе. Самый стремительный прыжок в новую эру."`,
// 			price: 250000,
// 			model: "i8"
// 		},
// 	},
// 	{
// 		id: 11,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/1488997/800x800/cd30c73ac07fc5d9cd1c7e884ec58fd6.jpeg",
// 			age: 2003,
// 			model: "Sprinter",
// 			color: "blue",
// 			description: `"Владею автомобилем 5 лет. Работаю на авто сам, поэтому всё в хорошем состоянии`,
// 			price: 15300,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 12,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/117172/800x800/49555d3ae6e584e88d71da13ed958bb1.jpeg",
// 			age: 2009,
// 			model: "A180",
// 			color: "black",
// 			description: "Черный, хетчбэк, бензин 1.6 л, автомат, передний привод",
// 			price: 16700,
// 			brand: "Mercedes",
// 		},
// 	},
// 	{
// 		id: 13,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/923229/800x800/453b7b24698c1e56a6748d5b40b109c3.jpeg",
// 			age: 2010,
// 			model: "GL450",
// 			color: "Gray",
// 			description: `"Возможна покупка в кредит: первоначальный платеж 7519 руб.
//          специализированной станиции.богатая комплектация."`,
// 			price: 13100,
// 			brand: "Mercedes",
// 		},
// 	},
// 	{
// 		id: 14,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/316926/800x800/07d36e54dd094d7433da6d854b0301de.jpeg",
// 			age: 2001,
// 			model: "S500 Long",
// 			color: "black",
// 			description: `"Авто в хорошем состоянии. По кузову проблем нет.
// 			Возможен небольшой торг возле авто. Более подробную информацию можно получить по телефону."`,
// 			price: 18700,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 15,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/1023927/800x800/b61b503fe1709d559f32014e3dfe6417.jpeg",
// 			age: 1999,
// 			model: "S300",
// 			color: "Gray",
// 			description: "Гаражное хранение, Сервисная книжка, Первый владелец, Не бит, Не крашен",
// 			price: 4300,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 16,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/785314/800x800/c2dbb17073a62c81cec23fdeedecf087.jpeg",
// 			age: 1989,
// 			model: "190",
// 			color: "white",
// 			description: "Один хозяин более 20 лет. авто никогда не видело сварки. все родное.торга нет.",
// 			price: 1200,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 17,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/1319356/800x800/d277b8e4b6d253f44a3861b358114013.jpeg",
// 			age: 2004,
// 			model: "E320 CDI",
// 			color: "black",
// 			description: "Машина ухожена, покрашены пороги нет ржавчины",
// 			price: 7000,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 18,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/24949/800x800/ae11918b7c64d81de49da250906cb492.jpeg",
// 			age: 2013,
// 			model: "E200 C207",
// 			color: "black",
// 			description: `"Продам ухоженный автомобиль. По технической части без замечаний вообще. Два комплекта резины."`,
// 			price: 25700,
// 			brand: "Mercedes"
// 		}
// 	},
// 	{
// 		id: 19,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/2375695/800x800/5a361fcf0cbf7018c136b1e506df47c4.jpeg",
// 			age: 2004,
// 			model: "A160 BlueEfficiency",
// 			color: "Gray",
// 			description: "Серебристый, хетчбэк, дизель 2 л, механика, передний привод",
// 			price: 15300,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 20,
// 		name: "ab.onliner",
// 		car: {
// 			img: "https://content.onliner.by/automarket/779378/800x800/15fe76145997e25b4eb1ab53c543805c.jpeg",
// 			age: 2014,
// 			model: "C180 AMG",
// 			color: "white",
// 			description: "Черный, седан, бензин 1.8 л, механика, задний привод",
// 			price: 15560,
// 			brand: "Mercedes",
// 		}
// 	},
// 	{
// 		id: 32,
// 		name: "av.by",
// 		car: {
// 			img: "https://content.onliner.by/automarket/2143644/800x800/d0b5270e32e5bc85973412d2707c4f99.jpeg",
// 			age: 1964,
// 			color: 'Black',
// 			brand: 'Volkswagen',
// 			description: 'На гарантии. Обслуживание на Атлант, по регламенту.',
// 			price: 9600,
// 			model: 'Polo',
// 		}
// 	},
// ]
