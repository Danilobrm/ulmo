import {StyleSheet} from 'react-native';
import typography from '../../styles/typography';

const style = StyleSheet.create({
  container: {
    height: 88,
    width: 88,
    marginHorizontal: 6,
  },
  image: {
    borderRadius: 8,
  },
  gradient: {
    borderRadius: 8,
    position: 'absolute',
    width: 88,
    height: 88,
    left: 0,
    top: 0,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    height: 32,
    width: 72,
    position: 'absolute',
    bottom: 0,
    color: '#FFFFFF',
    zIndex: 1,
    fontSize: typography.body3.fontSize,
    alignSelf: 'center',
    marginBottom: 8,
  },
});

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
