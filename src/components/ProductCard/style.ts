import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const style = StyleSheet.create({
  container: {
    width: 164,
    height: 268,
    marginHorizontal: 7.5,
    marginBottom: 24,
  },

  imageBox: {
    width: '100%',
    height: 200,
  },

  price: {
    fontSize: typography.body1.fontSize,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    marginTop: 8,
    marginBottom: 4,
  },
  priceHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  description: {
    width: '100%',
    height: 32,
    fontSize: typography.body3.fontSize,
    fontFamily: 'Poppins-Regular',
    color: colors.gray[500],
  },
  image: {
    zIndex: 0,
    position: 'absolute',
  },
  new: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: 'absolute',
    backgroundColor: '#FEE440',
    zIndex: 1,
    borderRadius: 4,
    margin: 8,
  },
  newText: {
    fontFamily: 'Poppins-Medium',
    fontSize: typography.body2.fontSize,
  },
});

export default style;
