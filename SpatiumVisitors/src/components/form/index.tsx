import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CustomField from '../custom_field';

const Form = () => {
  return (
    <>
      <View style={{marginBottom: 40}}>
        <Text style={styles.title}>Frontdesk login</Text>
        <Text style={styles.mandatory}>*All informations are mandatory.</Text>
      </View>

      <CustomField text="Email" />
      <CustomField text="Password" secureText />
    </>
  );
};

export default Form;
