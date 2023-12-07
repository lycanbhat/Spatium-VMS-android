import React, {useReducer} from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Form from './component/form';
import CustomButton from '../../components/custom_button';
import {Dimensions, View} from 'react-native';
import {PropsSignInState, SignInProps} from '../../common/types';
import {PropsSignInAction} from '../../common/interfaces';
import {DispatchSignInType} from '../../common/enums';

const initialState = {
  email: '',
  password: '',
};

const formReducer = (
  state: PropsSignInState,
  action: PropsSignInAction,
): PropsSignInState => {
  switch (action.type) {
    case DispatchSignInType.email:
      return {
        ...state,
        email: action.payload,
      };

    case DispatchSignInType.password:
      return {
        ...state,
        password: action.payload,
      };
  }
};

const SignIn: React.FC<SignInProps> = ({navigation: {navigate}}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const submit = () => {
    console.log(state);
    navigate('Home');
  };

  return (
    <Layout>
      <Header onPress={() => {}} />
      <View style={{marginHorizontal: Dimensions.get('screen').width / 4}}>
        <Form state={state} dispatch={dispatch} />
        <CustomButton onPress={submit} text="Login" />
      </View>
    </Layout>
  );
};

export default SignIn;
