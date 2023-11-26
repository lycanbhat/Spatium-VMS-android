import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 38,
    paddingVertical: 30,
    borderRadius: 60,
  },
  text: {
    fontFamily: 'IBMPlexSans-Medium',
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;
