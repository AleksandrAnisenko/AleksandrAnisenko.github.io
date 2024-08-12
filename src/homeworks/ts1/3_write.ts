/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

import { formatDate } from '../../helpers';
import { TOperation } from '../../Types';

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

type TCategory = {
  id: string;
  name: string;
  photo?: string;
};

type TProduct = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: TCategory;
};

type TArrElem = string | TCategory;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): TProduct => {
  const selectedCategory: TCategory = getCategory();
  const selectedProductName: string = generateProductName(selectedCategory.name);
  const price: number = getRandomInt();
  return {
    id: getDate(),
    name: selectedProductName,
    photo: `/img/img${selectedProductName}.jpg`,
    desc: `description ${selectedProductName}`,
    createdAt: createdAt,
    oldPrice: price + 10,
    price: price,
    category: selectedCategory,
  };
};

const categories = [
  { id: '1', name: 'Еда' },
  { id: '2', name: 'Напитки' },
];
const drinkProductNames = ['сок', 'кофе', 'чай', 'газировка', 'вода'];
const foodProductNames = ['стейк', 'паста', 'бутерброд', 'суп', 'салат'];

const getRandomArrIndex = (arr: TArrElem[]): number => Math.floor(Math.random() * arr.length);

const getRandomElem = (arr: TArrElem[]): TArrElem => {
  return arr[getRandomArrIndex(arr)];
};

const generateProductName = (category: string): string => {
  return (category === 'Еда' ? getRandomElem(foodProductNames) : getRandomElem(drinkProductNames)) as string;
};

const getCategory = (): TCategory => {
  return getRandomElem(categories) as TCategory;
};
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

export const createRandomOperation = (): TOperation => {
  const selectedCategory: string = 'Категория' + ` ${getRandomInt(1, 10)}`;
  return {
    id: getTime(),
    amount: getRandomInt(),
    category: selectedCategory,
    name: 'Имя операции',
    desc: 'Описание операции',
    createdAt: getDate(),
  };
};

const getRandomInt = (max = 1000, min = 1): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getTime = (): string => new Date().getTime().toString();
export const getDate = (): string => formatDate().toString();
