import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const style = StyleSheet.create({
  search: {
    height: 80,
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    width: 343,
    height: 64,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.gray[100],
  },
  input: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    fontFamily: 'Poppins-Regular',
    fontSize: typography.body1.fontSize,
    paddingLeft: 15,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: typography.body1.fontSize,
    fontWeight: '400',
    color: colors.gray[500],
    marginLeft: 16,
  },
});

const placeholder = (display: 'flex' | 'none') =>
  StyleSheet.create({
    style: {
      height: '100%',
      display: display,
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
export {placeholder};
