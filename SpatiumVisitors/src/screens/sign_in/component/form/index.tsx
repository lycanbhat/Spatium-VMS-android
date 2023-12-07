import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CustomField from '../../../../components/custom_field';
import {PropsSignInForm} from '../../../../common/interfaces';
import {DispatchSignInType, KeyboardType} from '../../../../common/enums';

const Form: React.FC<PropsSignInForm> = ({state, dispatch}) => {
  return (
    <>
      <View style={{marginBottom: 40}}>
        <Text style={styles.title}>Frontdesk login</Text>
        <Text style={styles.mandatory}>*All informations are mandatory.</Text>
      </View>

      <CustomField
        value={state.email}
        onChangeText={(value: string) =>
          dispatch({type: DispatchSignInType.email, payload: value})
        }
        keyboardType={KeyboardType['email-address']}
        placeholder="Enter email"
        text="Email"
      />
      <CustomField
        value={state.password}
        onChangeText={(value: string) =>
          dispatch({type: DispatchSignInType.password, payload: value})
        }
        placeholder="Enter password"
        text="Password"
        secureText
      />
    </>
  );
};

export default Form;
