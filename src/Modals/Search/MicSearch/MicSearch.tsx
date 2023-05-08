import React, {useContext, useLayoutEffect} from 'react';
import {Modal, Text, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import InputContext from '../../../contexts/InputContext';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../styles/colors';

function MicSearch() {
  const {focus} = useContext(InputContext);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={focus.micFocus}
      focusable>
      <View style={style.modal}>
        <Feather name="mic" size={100} color={colors.black} />
      </View>
    </Modal>
  );
}

export default MicSearch;
