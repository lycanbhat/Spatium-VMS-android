import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import {PropsCustomButton} from '../../common/interfaces';

const CustomButton: React.FC<PropsCustomButton> = ({
  text,
  backgroundColor,
  width,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor || colors.primary,
            width,
          },
        ]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
