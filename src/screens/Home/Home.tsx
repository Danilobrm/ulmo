import React, {useLayoutEffect, useState} from 'react';
import {View, Text, ScrollView, Modal, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../..';
import typography from '../../styles/style';
import style from './style';
import SearchBar from '../../components/SearchBar/SearchBar';
import Stories from './components/Stories/Stories';
import Categories from './components/Categories/Categories';
import Search from '../../Modals/Search/Search';
import SearchModalContext from '../../contexts/SearchModal';
import InputContext from '../../contexts/InputContext';
import Popular from './components/Popular/Popular';
import Menu from '../../components/Menu/Menu';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [focus, setFocus] = useState({
    inputFocus: false,
    micFocus: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  function openSearchModalFocusedOnInput() {
    setModalVisible(true);
    setFocus({
      inputFocus: true,
      micFocus: false,
    });
  }

  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.titleBox}>
          <Text style={(typography.font, style.title)}>ulmo</Text>
        </View>

        <InputContext.Provider value={{setFocus, focus}}>
          <SearchModalContext.Provider value={{setModalVisible, modalVisible}}>
            <TouchableOpacity onPress={openSearchModalFocusedOnInput}>
              <SearchBar />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}>
              <Search />
            </Modal>
          </SearchModalContext.Provider>
        </InputContext.Provider>

        <Stories />
        <Categories />
        <Popular />
      </ScrollView>
      <Menu />
    </SafeAreaView>
  );
}
