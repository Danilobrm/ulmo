import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const style = StyleSheet.create({
  modal: {
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 250,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 270, height: 270},
    shadowOpacity: 1,
    shadowRadius: 1,
    // borderColor: 'black',
    // borderWidth: 1,
  },
});

export default style;
