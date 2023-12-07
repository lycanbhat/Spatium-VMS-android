import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Bold',
    color: colors.white,
  },
  mandatory: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Regular',
    color: colors.white,
  },
});

export default styles;
