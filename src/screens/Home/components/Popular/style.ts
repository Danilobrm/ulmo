import {StyleSheet} from 'react-native';
import typography from '../../../../styles/typography';
import colors from '../../../../styles/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: typography.heading2.fontSize,
    fontWeight: '600',
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
    display: 'flex',
    width: 343,
    alignSelf: 'center',
    paddingVertical: 16,
  },
});

export default style;
