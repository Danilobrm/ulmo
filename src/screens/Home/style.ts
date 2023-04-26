import {StyleSheet} from 'react-native';
import typography from '../../styles/typography';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  titleBox: {
    height: 80,
    width: '100%',
    marginTop: 56,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: typography.heading1.fontSize,
    color: '#000000',
  },
});

export default style;
