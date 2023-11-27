import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.field_border,
    padding: 28,
    height: 200,
    width: 300,
    justifyContent: 'space-between',
    marginRight: 20,
  },
  fieldTitle: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 36,
  },
  fieldSubtitle: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 28,
  },
  fieldClient: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
    marginRight: 40,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
