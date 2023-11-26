import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: 'IBMPlexSans-Regular',
    marginBottom: 10,
  },
  fieldContainer: {
    borderColor: colors.field_border,
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
  },
  input: {
    color: colors.white,
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Regular',
  },
});

export default styles;
