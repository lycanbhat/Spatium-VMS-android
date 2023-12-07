import React from 'react';
import {View, Text, Animated, ScrollView} from 'react-native';
import colors from '../../../../constants/colors';
import CustomField from '../../../../components/custom_field';
import CustomButton from '../../../../components/custom_button';
import {ArrowRight} from 'react-native-feather';
import styles from './styles';
import {
  DispatchWelcomeType,
  FieldType,
  KeyboardType,
} from '../../../../common/enums';

type PropsState = {
  fullName: string;
  email: string;
  mobile: string;
};

enum DispatchType {
  'fullName',
  'email',
  'mobile',
}

interface PropsDispatch {
  type: DispatchType;
  payload: string;
}

interface Props {
  flex: Animated.Value;
  state: PropsState;
  dispatch: (action: any) => void;
}

const Form: React.FC<Props> = ({flex, state, dispatch}) => {
  return (
    <Animated.View
      style={[
        styles.container,
        {
          flex,
        },
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 40}}>
          <Text style={styles.title}>Provide your information</Text>
          <Text style={styles.mandatory}>*All informations are mandatory.</Text>
        </View>
        <CustomField
          value={state.fullName}
          onChangeText={(value: string) =>
            dispatch({type: DispatchWelcomeType.fullName, payload: value})
          }
          placeholder="Enter full name"
          text="Full Name"
        />
        <CustomField
          fieldType={FieldType.email}
          value={state.email}
          onChangeText={(value: string) =>
            dispatch({type: DispatchWelcomeType.email, payload: value})
          }
          keyboardType={KeyboardType['email-address']}
          placeholder="Enter email"
          text="Email"
        />
        <CustomField
          maxLength={10}
          value={state.mobile}
          onChangeText={(value: string) =>
            dispatch({type: DispatchWelcomeType.mobile, payload: value})
          }
          keyboardType={KeyboardType['phone-pad']}
          placeholder="Enter mobile"
          text="Mobile"
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CustomButton
            text="Clear all"
            onPress={() => dispatch({type: DispatchWelcomeType.clear})}
            backgroundColor={colors.secondary}
          />
          <View
            style={{
              backgroundColor: colors.primary,
              padding: 20,
              borderRadius: 40,
            }}>
            <ArrowRight color={colors.white} />
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Form;
