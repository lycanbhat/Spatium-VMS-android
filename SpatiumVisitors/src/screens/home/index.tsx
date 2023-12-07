import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../../components/layout';
import Header from '../../components/header';
import styles from './styles';
import Tile from './component/tile';
import CustomButton from '../../components/custom_button';
import {HomeProps} from '../../common/types';

const Home: React.FC<HomeProps> = ({navigation: {popToTop, navigate}}) => {
  return (
    <Layout>
      <Header onPress={() => popToTop()} showButton />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi, Anant Kulkarni</Text>
        <Text style={styles.subtitle}>EMPID: 0348</Text>
      </View>

      <View style={styles.tileContainer}>
        <Tile title="320" subtitle="Total Visitors" />
        <Tile title="19" subtitle="Today's Visitors" />
        <Tile title="02" subtitle="Visitors by client" isDropdown />
      </View>

      <CustomButton
        onPress={() => navigate('Welcome')}
        text="Go to VMS Kiosk"
        width={400}
      />
    </Layout>
  );
};

export default Home;
