import { Injectable } from '@angular/core';

export interface Quote {
  text: string;
  author: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: Quote[] = [
    {
      text: "Успіх - це рух від невдачі до невдачі без втрати ентузіазму.",
      author: "Вінстон Черчилль",
      category: "Мотивація"
    },
    {
      text: "Мрій про більше, ніж інші вважають можливим.",
      author: "Стів Джобс",
      category: "Натхнення"
    },
    {
      text: "Єдиний спосіб зробити чудову роботу - любити те, що ти робиш.",
      author: "Стів Джобс",
      category: "Натхнення"
    },
    {
      text: "Найбільший ризик - не ризикувати взагалі.",
      author: "Марк Цукерберг",
      category: "Сміливість"
    },
    {
      text: "Краще зробити і шкодувати, ніж шкодувати, що не зробив.",
      author: "Марк Твен",
      category: "Дія"
    },
    {
      text: "Майбутнє належить тим, хто вірить у красу своїх мрій.",
      author: "Елеонора Рузвельт",
      category: "Мрії"
    },
    {
      text: "Не бійся рухатися повільно, бійся стояти на місці.",
      author: "Китайська мудрість",
      category: "Прогрес"
    }
  ];

  constructor() { }

  getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}