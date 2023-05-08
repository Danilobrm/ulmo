import {ImageSourcePropType} from 'react-native';

export type PopularType = {
  image: ImageSourcePropType;
  description: string;
  price: number;
  isNewProduct?: true;
  product: PopularType;
};
