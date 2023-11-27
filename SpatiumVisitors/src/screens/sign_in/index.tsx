import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Form from '../../components/form';
import CustomButton from '../../components/custom_button';
import {Dimensions, View} from 'react-native';
import {SignInProps} from '../../types/navigation';

const SignIn: React.FC<SignInProps> = ({navigation: {navigate}}) => {
  return (
    <Layout>
      <Header onPress={() => {}} />
      <View style={{marginHorizontal: Dimensions.get('screen').width / 4}}>
        <Form />
        <CustomButton onPress={() => navigate('Home')} text="Login" />
      </View>
    </Layout>
  );
};

export default SignIn;
