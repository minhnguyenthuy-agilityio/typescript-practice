import { User, Cart, Product } from '@/interfaces';

interface Users extends User {
  password: string;
}

const users: Users[] = [
  {
    id: 'df4ed166-7a73-4c6b-aabc-237e4a4d57eb',
    name: 'Mai Huynh',
    email: 'minhng271@gmail.com',
    password: '1234abcd',
  },
  {
    id: '545d3db5-5472-4a8a-90f2-8372db9f43fe',
    name: 'Minh Nguyen',
    email: 'minhng21@gmail.com',
    password: '1245khoi',
  },
  {
    id: '0a0ea77d-f245-4c9c-a927-72927d368901',
    name: 'min min',
    email: 'minu@gmail.com',
    password: '1234abcdm',
  },
];

const products: Product[] = [
  {
    id: 1,
    name: 'lira earrings',
    price: 20,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 20,
    discountPercent: 0,
  },
  {
    id: 2,
    name: 'hal earrings',
    price: 25,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 2,
    discountPercent: 20,
  },
  {
    id: 3,
    name: 'kaede hair pin set of 3',
    price: 21,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 1,
    discountPercent: 0,
  },
  {
    id: 4,
    name: 'hair pin set of 3',
    price: 22,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 0,
    discountPercent: 0,
  },
  {
    id: 5,
    name: 'plaine necklace',
    price: 23,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 2,
    discountPercent: 0,
  },
  {
    id: 6,
    name: 'yuki hair pin set of 3',
    price: 29,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 2,
    discountPercent: 0,
  },
  {
    id: 7,
    name: 'yuki hair pin set of 3',
    price: 26,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 2,
    discountPercent: 0,
  },
  {
    id: 8,
    name: 'bin lucky',
    price: 25,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 20,
    discountPercent: 0,
  },
  {
    id: 9,
    name: 'air black',
    price: 27,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    image:
      'https://res.cloudinary.com/de2x8dwvf/image/upload/v1690739723/TS-practice/Lira_Earrings_osvkhh.jpg',
    quantity: 10,
    discountPercent: 0,
  },
];

const cart: Cart[] = [
  {
    id: 'df4ed166-7a73-4c6b-aabc-237e4a4d57eb',
    products: [
      {
        id: 6,
        quantity: 1,
        name: 'yuki hair pin set of 3',
        price: 29,
      },
      {
        id: 1,
        quantity: 1,
        name: 'lira earrings',
        price: 20,
      },
    ],
  },
  {
    id: '545d3db5-5472-4a8a-90f2-8372db9f43fe',
    products: [
      {
        id: 6,
        quantity: 2,
        name: 'yuki hair pin set of 3',
        price: 29,
      },
      {
        id: 2,
        quantity: 1,
        name: 'hal earrings',
        price: 20,
      },
    ],
  },
  {
    id: '0a0ea77d-f245-4c9c-a927-72927d368901',
    products: [],
  },
];

export { products, users, cart };
