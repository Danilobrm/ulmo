import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {StoriesType} from '../../types/StoriesType';

const Storie = ({image, title}: StoriesType) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <SafeAreaView style={style.container}>
        <LinearGradient
          colors={['transparent', 'rgba(33, 33, 33, 0.8)']}
          style={style.gradient}
        />
        <Image source={image} style={style.image} />
        <Text style={style.title}>{title}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default Storie;
