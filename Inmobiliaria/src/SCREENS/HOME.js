import React from 'react';
import {
  ScrollView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SearchBar from '../COMPONENTS/SearchBar';
import Card from '../COMPONENTS/Card';
import styles from '../styles'
const HOME: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <Card/>
      </ScrollView>
  );
};


export default HOME;
