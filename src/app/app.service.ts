import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Products} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  sendOrder(data: any) {
    return this.httpClient.post('https://testologia.site/burgers-order', data)
  }

  productsData_1: Products[] = [
    {
      image: './assets/images/Burger-1.png',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      basePrice: 8,
      price: 8,
      grams: 360
    },
    {
      image: './assets/images/Burger-2.png',
      title: 'BBQ с беконом и курицей',
      text: 'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
      basePrice: 7,
      price: 7,
      grams: 390
    },
    {
      image: './assets/images/Burger-3.png',
      title: 'Дабл биф бургер',
      text: 'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы,\n' +
        '            свежий томат, бекон, красный лук, соус бургер, горчица',
      basePrice: 10,
      price: 10,
      grams: 420
    },
    {
      image: './assets/images/Burger-4.png',
      title: 'Баварский бургер',
      text: 'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
      basePrice: 7,
      price: 7,
      grams: 220
    },
    {
      image: './assets/images/Burger-5.png',
      title: 'Бекон чизбургер',
      text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
      basePrice: 8,
      price: 8,
      grams: 220
    },
    {
      image: './assets/images/Burger-6.png',
      title: 'Индиана бургер',
      text: 'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец\n' +
        '            маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      basePrice: 9,
      price: 9,
      grams: 320
    },
    {
      image: './assets/images/Burger-7.png',
      title: 'Вегги бургер',
      text: 'Булочка для бургера, вегетарианская котлета, красный лук, сыр,\n' +
        '            свежий томат, соус барбекю, соус сырный, салат айсберг',
      basePrice: 8,
      price: 8,
      grams: 280
    },
    {
      image: './assets/images/Burger-8.png',
      title: 'Плаксивый Джо',
      text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень',
      basePrice: 7,
      price: 7,
      grams: 380
    },
    {
      image: './assets/images/Burger-9.png',
      title: 'Двойной чиз бургер',
      text: 'Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      basePrice: 11,
      price: 11,
      grams: 400
    },
    {
      image: './assets/images/Burger-10.png',
      title: 'Фрешбургер',
      text: 'Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат',
      basePrice: 9,
      price: 9,
      grams: 300
    },
    {
      image: './assets/images/Burger-11.png',
      title: 'Цуккини бургер',
      text: 'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень',
      basePrice: 8,
      price: 8,
      grams: 320
    },
    {
      image: './assets/images/Burger-12.png',
      title: 'Двойной бургер чеддар',
      text: 'Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень',
      basePrice: 9,
      price: 9,
      grams: 360
    }
  ];

  productsData_2: Products[] = [
    {
      "image": "https://testologia.site/burger-images/1.png",
      "title": "Бургер чеддер & бекон",
      "text": "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      "price": 8,
      "basePrice": 8,
      "grams": 360
    },
    {
      "image": "https://testologia.site/burger-images/2.png",
      "title": "BBQ с беконом и курицей",
      "text": "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      "price": 7,
      "basePrice": 7,
      "grams": 390
    },
    {
      "image": "https://testologia.site/burger-images/3.png",
      "title": "Дабл биф бургер",
      "text": "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      "price": 10,
      "basePrice": 10,
      "grams": 420
    },
    {
      "image": "https://testologia.site/burger-images/4.png",
      "title": "Баварский бургер",
      "text": "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      "price": 8,
      "basePrice": 8,
      "grams": 360
    },
    {
      "image": "https://testologia.site/burger-images/5.png",
      "title": "Бекон чизбургер",
      "text": "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      "price": 8,
      "basePrice": 8,
      "grams": 220
    },
    {
      "image": "https://testologia.site/burger-images/6.png",
      "title": "Индиана бургер",
      "text": "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      "price": 9,
      "basePrice": 9,
      "grams": 320
    },
    {
      "image": "https://testologia.site/burger-images/7.png",
      "title": "Вегги бургер",
      "text": "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      "price": 8,
      "basePrice": 8,
      "grams": 280
    },
    {
      "image": "https://testologia.site/burger-images/8.png",
      "title": "Плаксивый Джо",
      "text": "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      "price": 7,
      "basePrice": 7,
      "grams": 300
    },
    {
      "image": "https://testologia.site/burger-images/9.png",
      "title": "Двойной чиз бургер",
      "text": "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      "price": 11,
      "basePrice": 11,
      "grams": 400
    },
    {
      "image": "https://testologia.site/burger-images/10.png",
      "title": "Фрешбургер",
      "text": "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      "price": 9,
      "basePrice": 9,
      "grams": 300
    },
    {
      "image": "https://testologia.site/burger-images/11.png",
      "title": "Цуккини бургер",
      "text": "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      "price": 8,
      "basePrice": 8,
      "grams": 320
    },
    {
      "image": "https://testologia.site/burger-images/12.png",
      "title": "Двойной бургер чеддар",
      "text": "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      "price": 9,
      "basePrice": 9,
      "grams": 360
    },
    {
      "image": "https://testologia.site/burger-images/13.png",
      "title": "Блэк Уайт Лайт",
      "text": "Черная и белая булочка для бургера, говяжья котлета, сыр Пармезан, острый соус",
      "price": 12,
      "basePrice": 12,
      "grams": 290
    },
    {
      "image": "https://testologia.site/burger-images/14.png",
      "title": "Блэк Уайт Бекон",
      "text": "Черная и белая булочка для бургера, говяжья котлета, Бекон, сыр Чеддар, салат айсберг, соус, огурчик",
      "price": 13,
      "basePrice": 13,
      "grams": 310
    },
    {
      "image": "https://testologia.site/burger-images/15.png",
      "title": "Блэк Уайт Макс",
      "text": "Черная и белая булочка для бургера, говяжья котлета, сыр Чеддар, салат айсберг, яйцо, черный соус",
      "price": 16,
      "basePrice": 16,
      "grams": 330
    },
    {
      "image": "https://testologia.site/burger-images/16.png",
      "title": "Блэк Стар Лайт",
      "text": "Черная булочка для бургера, куриная котлета, яйцо,салат айсберг, свежий томат, огурец, соус Блэк",
      "price": 13,
      "basePrice": 13,
      "grams": 290
    },
    {
      "image": "https://testologia.site/burger-images/17.png",
      "title": "Блэк Стар",
      "text": "Черная булочка для бургера, говяжья котлета, сыр Чеддар, салат айсберг, свежий томат, огурец",
      "price": 14,
      "basePrice": 14,
      "grams": 310
    },
    {
      "image": "https://testologia.site/burger-images/18.png",
      "title": "Блэк Стар Макс",
      "text": "Черная булочка для бургера, говяжья котлета, Бекон, Лук, сыр Чеддар, салат айсберг, свежий томат, кетчуп",
      "price": 15,
      "basePrice": 15,
      "grams": 330
    }
  ];

  url_1 = 'https://testologia.site/burgers-data';
  url_2 = 'https://testologia.site/burgers-data?extra=black';

  getOrder() {
    return this.httpClient.get(this.url_2)
  }

}
