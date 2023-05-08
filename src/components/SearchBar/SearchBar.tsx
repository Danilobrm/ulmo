import React, {useContext, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import colors from '../../styles/colors';
import SearchModalContext from '../../contexts/SearchModal';
import InputContext from '../../contexts/InputContext';

const SearchBar = () => {
  const {setModalVisible, modalVisible} = useContext(SearchModalContext);
  const [value, setValue] = useState<string>('');
  const {focus, setFocus} = useContext(InputContext);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function openMicModal() {
    openModal();
    setFocus({
      inputFocus: false,
      micFocus: true,
    });
  }

  return (
    <SafeAreaView style={style.search}>
      <View style={style.searchBar}>
        {!modalVisible ? (
          <View style={style.placeholder}>
            <AntDesign name="search1" size={24} color={colors.gray[500]} />
            <Text style={style.label}>Search</Text>
          </View>
        ) : (
          <TouchableOpacity style={style.goBackArrow} onPress={closeModal}>
            <AntDesign name="arrowleft" size={24} color={colors.black} />
          </TouchableOpacity>
        )}

        <TextInput
          autoFocus={focus.inputFocus}
          style={style.input}
          value={value}
          onChangeText={setValue}
          maxLength={20}
          editable={modalVisible}
        />

        {modalVisible && value ? (
          <TouchableOpacity
            style={style.eraseTextIcon}
            onPressIn={() => setValue('')}>
            <AntDesign name="closecircleo" size={24} color={colors.black} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={style.micIcon} onPress={openMicModal}>
            <Feather name="mic" size={24} color={colors.black} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
// onTouchStart={() => navigation.navigate('Search')}>

export default SearchBar;
