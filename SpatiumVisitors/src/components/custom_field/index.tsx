import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import {Check} from 'react-native-feather';
import {validation} from './validation';

interface Props {
  value: string;
  onChangeText: any;
  text: string;
  secureText?: boolean;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  fieldType?: 'text' | 'email' | 'dropdown';
}

enum FieldType {
  'text',
  'email',
  'dropdown',
}

const CustomField: React.FC<Props> = ({
  text,
  secureText,
  placeholder,
  keyboardType = 'default',
  value,
  onChangeText,
  fieldType = FieldType.text,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginBottom: 30}}>
      {fieldType == FieldType.text ? (
        <>
          <Text style={styles.title}>{text}</Text>
          <View
            style={[
              styles.fieldContainer,
              isFocused && {borderColor: colors.primary},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={colors.field_border}
              secureTextEntry={secureText || false}
              cursorColor={colors.white}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={styles.input}
            />
          </View>
        </>
      ) : fieldType == 'email' ? (
        <>
          <Text style={styles.title}>{text}</Text>
          <View
            style={[
              styles.fieldContainer,
              isFocused && {borderColor: colors.primary},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={colors.field_border}
              secureTextEntry={secureText || false}
              cursorColor={colors.white}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={styles.input}
            />
            {validation('email', value) && <Check color={'green'} />}
          </View>
        </>
      ) : null}
    </View>
  );
};

export default CustomField;
