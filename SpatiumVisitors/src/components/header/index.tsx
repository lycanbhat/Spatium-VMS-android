import React from 'react';
import {Image, View} from 'react-native';
import images from '../../constants/images';
import styles from '../header/styles';
import CustomButton from '../custom_button';
import colors from '../../constants/colors';

interface Props {
  showButton?: boolean;
}

const Header: React.FC<Props> = ({showButton}) => {
  return (
    <View style={styles.container}>
      <Image style={{width: '15%'}} resizeMode="contain" source={images.logo} />
      {showButton && (
        <CustomButton backgroundColor={colors.secondary} text="Logout" />
      )}
    </View>
  );
};

export default Header;
