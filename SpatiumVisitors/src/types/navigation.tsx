import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type StackParamList = {
  SignIn: undefined;
  Home: undefined;
  Welcome: undefined;
};

export type SignInProps = {
  navigation: StackNavigationProp<StackParamList, 'SignIn'>;
};

export type HomeProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

export type WelcomeProps = {
  navigation: StackNavigationProp<StackParamList, 'Welcome'>;
};
