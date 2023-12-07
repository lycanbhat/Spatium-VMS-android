import React, {useRef, useState, useReducer, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../constants/colors';
import Header from '../../components/header';
import styles from './styles';
import {ExternalLink} from 'react-native-feather';
import CustomButton from '../../components/custom_button';
import CustomBackground from './component/custom_background';
import Form from './component/form';
import {PropsWelcomeState, PropsWelcomeAction} from '../../common/interfaces';
import {DispatchWelcomeType} from '../../common/enums';

const formReducer = (
  state: PropsWelcomeState,
  action: PropsWelcomeAction,
): PropsWelcomeState => {
  switch (action.type) {
    case DispatchWelcomeType.fullName:
      return {
        ...state,
        fullName: action.payload,
      };

    case DispatchWelcomeType.email:
      return {
        ...state,
        email: action.payload,
      };
    case DispatchWelcomeType.mobile:
      return {
        ...state,
        mobile: action.payload,
      };
  }
};

const Welcome: React.FC = () => {
  const initialState = {
    fullName: '',
    email: '',
    mobile: '',
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const opacity = useRef(new Animated.Value(1)).current;
  const flex: Animated.Value = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState<boolean>(true);

  const animateModal = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setShowButton(false);
    }),
      Animated.timing(flex, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }).start();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flexDirection: 'row', flex: 1}}>
      <CustomBackground>
        <View style={styles.contentContainer}>
          <Header onPress={() => {}} />
          <View style={styles.innerContentContainer}>
            <View style={{marginBottom: 12}}>
              <Text style={styles.title}>Welcome to SPATIUM OFFICES</Text>
            </View>

            <View style={{marginBottom: 12}}>
              <Text style={styles.content}>
                We’re thrilled to welcome you! For a secure and enjoyable visit,
                please register at this visitor registration kiosk.
              </Text>
            </View>

            <Text style={styles.content}>
              Follow the easy steps to complete the process. If you have any
              questions or need assistance, our friendly staff is available to
              help you.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.iconContainer}>
              <ExternalLink color={colors.white} width={18} height={18} />
            </View>
            <Text style={styles.buttonText}>Visit website</Text>
          </View>
        </View>

        {showButton && (
          <Animated.View style={[{opacity}, styles.digitalPassContainer]}>
            <CustomButton
              onPress={() => animateModal()}
              text="Generate digital pass"
              backgroundColor={colors.primary}
            />
          </Animated.View>
        )}
      </CustomBackground>
      {!showButton && <Form state={state} dispatch={dispatch} flex={flex} />}
    </KeyboardAvoidingView>
  );
};

export default Welcome;
