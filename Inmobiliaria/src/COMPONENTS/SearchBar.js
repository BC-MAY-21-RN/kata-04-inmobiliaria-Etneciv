import React from "react";

import {
    TextInput,
    View,
} from 'react-native';
import styles from '../styles';
const SearchBar = () =>{

    return(
        <View style ={styles.searchInput}>
            <View styles={styles.searchView}>
                <TextInput
                    placeholder="Realiza una busqueda..."
                />
            </View>
        </View>
    );
};

export default SearchBar;
