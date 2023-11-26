import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Form from '../../components/form';
import CustomButton from '../../components/custom_button';
import {Dimensions, View} from 'react-native';

const SignIn: React.FC = () => {
  return (
    <Layout>
      <Header />
      <View style={{marginHorizontal: Dimensions.get('screen').width / 4}}>
        <Form />
        <CustomButton text="Login" />
      </View>
    </Layout>
  );
};

export default SignIn;
