import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {ChevronDown} from 'react-native-feather';
import colors from '../../../../constants/colors';
import {PropsHomeTile} from '../../../../common/interfaces';

const Tile: React.FC<PropsHomeTile> = ({
  title,
  subtitle,
  isDropdown = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fieldTitle}>{title}</Text>
      {isDropdown ? (
        <>
          <Text style={styles.fieldSubtitle}>{subtitle}</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.fieldClient}>Neoastra</Text>
            <ChevronDown color={colors.white} width={28} height={28} />
          </View>
        </>
      ) : (
        <Text style={styles.fieldSubtitle}>{subtitle}</Text>
      )}
    </View>
  );
};

export default Tile;
