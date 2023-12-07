import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  contentContainer: {flex: 1},
  digitalPassContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContentContainer: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 24,
  },
  content: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    backgroundColor: colors.field_border,
    borderRadius: 40,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 15,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    padding: 10,
  },
});

export default styles;
