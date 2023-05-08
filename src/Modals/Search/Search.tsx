import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './style';
import {useNavigation} from '@react-navigation/native';
// import MicSearch from './MicSearch/MicSearch';

function Search() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView style={style.container}>
      <SearchBar />
      <ScrollView>
        <Text>OPAAAAAAAAAA</Text>
      </ScrollView>
      {/* <MicSearch /> */}
    </SafeAreaView>
  );
}

export default Search;
