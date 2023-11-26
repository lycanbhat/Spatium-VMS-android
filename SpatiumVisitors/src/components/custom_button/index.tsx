import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

interface Props {
  text: string;
  backgroundColor?: string;
}

const CustomButton: React.FC<Props> = ({text, backgroundColor}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor || colors.primary},
      ]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomButton;
