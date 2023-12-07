import React from 'react';
import Layout from '../../../../components/layout';
import {Animated, Dimensions, ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../../constants/images';
import styles from './styles';
import colors from '../../../../constants/colors';

interface Props {
  children: React.ReactNode;
}

const CustomBackground: React.FC<Props> = ({children}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
      }}>
      <ImageBackground
        resizeMode="cover"
        source={images.background}
        style={styles.imageBackgroundContainer}
        blurRadius={1}>
        <LinearGradient
          colors={colors.background_gradient}
          style={styles.linearGradientContainer}>
          {children}
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
};

export default CustomBackground;
