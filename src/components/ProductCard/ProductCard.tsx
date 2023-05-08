import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import style from './style';
import {PopularType} from '../../types/PopularType';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {savedProducts} from './saveProduct';
import colors from '../../styles/colors';

// import { Container } from './styles';

const ProductCard = ({
  image,
  description,
  price,
  isNewProduct,
  product,
}: PopularType) => {
  const [saveProduct, setSaveProduct] = useState<boolean>(false);

  function saveProductFunction() {
    const indexOfItem = savedProducts.indexOf(product);
    if (indexOfItem === -1) {
      savedProducts.push(product);
      setSaveProduct(true);
      return;
    }
    setSaveProduct(false);
    savedProducts.splice(indexOfItem, 1);
  }

  console.log(savedProducts);

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <SafeAreaView style={style.container}>
        {isNewProduct && (
          <View style={style.new}>
            <Text style={style.newText}>new</Text>
          </View>
        )}
        <View style={style.imageBox}>
          <Image style={style.image} source={image} />
        </View>
        <View style={style.priceHeader}>
          <Text style={style.price}>${price}</Text>
          <TouchableWithoutFeedback onPress={saveProductFunction}>
            <AntDesign
              name={saveProduct ? 'heart' : 'hearto'}
              size={24}
              color={colors.black}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={style.description}>{description}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default ProductCard;
