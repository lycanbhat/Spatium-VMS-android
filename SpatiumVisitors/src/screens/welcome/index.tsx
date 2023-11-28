import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../constants/colors';
import Header from '../../components/header';
import styles from './styles';
import {ExternalLink} from 'react-native-feather';
import CustomButton from '../../components/custom_button';
import CustomBackground from './component/custom_background';

const Welcome: React.FC = () => {
  return (
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
      <View style={[styles.contentContainer, styles.digitalPassContainer]}>
        <CustomButton
          onPress={() => {}}
          text="Generate digital pass"
          backgroundColor={colors.primary}
        />
      </View>
    </CustomBackground>
  );
};

export default Welcome;
