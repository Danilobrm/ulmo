import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/colors';
import style from './style';

import logoGray from './shape_gray.png';
import logoBlack from './shape_black.png';
import {useRoute} from '@react-navigation/native';
// import { Container } from './styles';

const Menu = () => {
  const route = useRoute();
  console.log(route.name);
  return (
    <SafeAreaView>
      <View style={style.container}>
        <TouchableOpacity style={style.menuItem}>
          <View>
            <Image source={route.name === 'Home' ? logoBlack : logoGray} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menuItem}>
          <View>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={32}
              color={colors.gray[400]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuItem}>
          <View>
            <AntDesign name="hearto" size={32} color={colors.gray[400]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuItem}>
          <View>
            <AntDesign name="user" size={32} color={colors.gray[400]} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
