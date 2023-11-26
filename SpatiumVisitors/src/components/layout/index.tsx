import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  );
};

export default Layout;
