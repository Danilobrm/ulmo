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
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    width: 343,
    height: 64,
    backgroundColor: colors.gray[100],
  },
  input: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: typography.body1.fontSize,
    paddingLeft: 56,
    zIndex: 0,
    position: 'absolute',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: typography.body1.fontSize,
    fontWeight: '400',
    color: colors.gray[500],
    marginLeft: 16,
  },
  goBackArrow: {
    position: 'absolute',
    left: 16,
    zIndex: 3,
  },
  eraseTextIcon: {
    position: 'absolute',
    right: 16,
    zIndex: 3,
  },
  micIcon: {
    position: 'absolute',
    right: 16,
    zIndex: 3,
  },
  placeholder: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    left: 16,
  },
});

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
