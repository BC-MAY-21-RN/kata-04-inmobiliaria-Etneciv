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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <SearchBar/>
        <Card/>
      </ScrollView>
  );
};


export default HOME;
