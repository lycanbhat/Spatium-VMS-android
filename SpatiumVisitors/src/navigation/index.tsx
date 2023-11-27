import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/sign_in';
import Home from '../screens/home';
import {StackParamList} from '../types/navigation';

const Stack = createStackNavigator<StackParamList>();

const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
