import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleContainer: {paddingVertical: 72},
  title: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 40,
  },
  subtitle: {
    color: colors.white,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
  },
  tileContainer: {flexDirection: 'row', marginBottom: 60},
});

export default styles;
