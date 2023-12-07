import React, {useState, useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import {Check} from 'react-native-feather';
import {validation} from './validation';
import {FieldType, KeyboardType} from '../../common/enums';
import {PropsCustomField} from '../../common/interfaces';

const CustomField: React.FC<PropsCustomField> = ({
  text,
  secureText,
  placeholder,
  keyboardType = KeyboardType.default,
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
      ) : fieldType == FieldType.email ? (
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
