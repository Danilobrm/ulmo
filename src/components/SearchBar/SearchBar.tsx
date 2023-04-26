import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import style, {placeholder} from './style';
import colors from '../../styles/colors';

// import { Container } from './styles';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState<'flex' | 'none'>('flex');

  return (
    <SafeAreaView style={style.search}>
      <View style={style.searchBar}>
        <View style={placeholder(display).style}>
          <Icon name="search1" size={24} color={colors.gray[500]} />
          <Text style={style.label}>Search</Text>
        </View>
        <TextInput
          onFocus={() => setDisplay('none')}
          onBlur={() => setDisplay(value ? 'none' : 'flex')}
          style={style.input}
          value={value}
          onChangeText={setValue}
          keyboardType="default"
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
