import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    display: 'flex',
    flexDirection: 'row',
    borderColor: colors.gray[200],
    borderTopWidth: 1,
  },
  menuItem: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
