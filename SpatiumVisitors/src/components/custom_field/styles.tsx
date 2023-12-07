import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'IBMPlexSans-Regular',
    marginBottom: 10,
  },
  fieldContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.field_border,
    padding: 14,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
  },
  input: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Regular',
  },
});

export default styles;
