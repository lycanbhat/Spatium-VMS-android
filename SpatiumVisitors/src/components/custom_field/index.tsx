import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

interface Props {
  text: string;
  secureText?: boolean;
}

const CustomField: React.FC<Props> = ({text, secureText}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginBottom: 30}}>
      <Text style={styles.title}>{text}</Text>
      <View
        style={[
          styles.fieldContainer,
          isFocused && {borderColor: colors.primary},
        ]}>
        <TextInput
          secureTextEntry={secureText || false}
          cursorColor={colors.white}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default CustomField;
