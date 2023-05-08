import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {popular} from '../../../../mock/home/popular/popular';
import {PopularType} from '../../../../types/PopularType';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import style from './style';

// import { Container } from './styles';

const Popular = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={style.title}>popular</Text>
      </View>
      <View style={style.container}>
        {popular.map((item: PopularType, index: number) => {
          return (
            <ProductCard
              key={index}
              image={item.image}
              description={item.description}
              price={item.price}
              isNewProduct={item.isNewProduct}
              product={item}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Popular;
