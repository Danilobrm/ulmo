import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../..';
import typography from '../../styles/style';
import style from './style';
import SearchBar from '../../components/SearchBar/SearchBar';
import Stories from './components/Stories/Stories';
import Categories from './components/Categories/Categories';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.titleBox}>
          <Text style={(typography.font, style.title)}>ulmo</Text>
        </View>
        <SearchBar />
        <Stories />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
