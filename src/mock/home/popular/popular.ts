import img from './pic.png';
import img1 from './pic-1.png';
import img2 from './pic-2.png';
import img3 from './pic-3.png';
import {PopularType} from '../../../types/PopularType';

const popular: PopularType[] = [
  {
    image: img,
    description: 'Wooden bedside table featuring a raised design',
    price: 150.0,
    isNewProduct: true,
  },
  {
    image: img1,
    description: 'Chair made of ash wood sourced from responsib...',
    price: 149.99,
  },
  {
    image: img2,
    description: 'Square bedside table with legs, a rattan shelf and a...',
    price: 140.25,
  },
  {
    image: img3,
    description: 'Dark wood side board with a faceted drawer',
    price: 450.0,
  },
];

export {popular};
