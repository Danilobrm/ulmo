import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import {categories} from '../../../../mock/home/categories/mockCategories';
import {CategoriesType} from '../../../../types/CategoriesType';
import Category from '../../../../components/Category/Category';

// import { Container } from './styles';

const Categories = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        {categories.map((category: CategoriesType, index: number) => {
          return (
            <Category
              key={index}
              image={category.image}
              title={category.title}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
