import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import style from './style';
import {CategoriesType} from '../../types/CategoriesType';
import {TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const Category = ({image, title}: CategoriesType) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <SafeAreaView style={style.container}>
        <Text style={style.title}>{title}</Text>
        <Image style={style.image} source={image} />
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default Category;
