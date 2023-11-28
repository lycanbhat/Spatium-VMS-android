import React from 'react';
import Layout from '../../../../components/layout';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../../constants/images';
import styles from './styles';
import colors from '../../../../constants/colors';

interface Props {
  children: React.ReactNode;
}

const CustomBackground: React.FC<Props> = ({children}) => {
  return (
    <Layout>
      <ImageBackground
        source={images.background}
        style={styles.imageBackgroundContainer}
        blurRadius={1}>
        <LinearGradient
          colors={colors.background_gradient}
          style={styles.linearGradientContainer}>
          {children}
        </LinearGradient>
      </ImageBackground>
    </Layout>
  );
};

export default CustomBackground;
