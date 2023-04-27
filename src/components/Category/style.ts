import {StyleSheet} from 'react-native';
import typography from '../../styles/typography';
import colors from '../../styles/colors';

const style = StyleSheet.create({
  container: {
    width: 343,
    height: 100,
    borderRadius: 8,
    backgroundColor: colors.gray[100],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: typography.heading2.fontSize,
    color: '#000000',
    width: 229,
    height: 32,
    marginLeft: 16,
    marginTop: 16,
  },
  image: {
    width: 82,
    height: '100%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default style;
