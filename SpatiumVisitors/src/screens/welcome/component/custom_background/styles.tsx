import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.primary,
  },
  linearGradientContainer: {
    flex: 1,
    paddingHorizontal: 60,
    paddingVertical: 20,
    flexDirection: 'row',
  },
});

export default styles;
