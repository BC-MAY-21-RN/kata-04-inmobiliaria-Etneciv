import React from "react";
import { View, FlatList, Text, Image } from "react-native";

import INFO from '../inmobiliariaInfo'
import styles from '../styles';

const Card = () =>{
    const Item = ({ image,title,direction,price, rooms, toilet,ft,points }) => (
        <View style={styles.card} >
            <View style={styles.cardImageContain}>
                <Image
                    style={styles.cardImg}
                    source = {{uri:`${image}`}}
                />
                <View style={styles.points}>
                    <Image
                        style={[styles.icons,{marginLeft:12,}]}
                        source = {require('../img/icons/points.png')}
                    />
                    <Text style={{color:'#7a6229', fontWeight:'bold'}}>{points}</Text>
                </View>
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{title}</Text>
                <View style={styles.flexDirectionRow}>
                    <Image style={styles.icons} source={require('../img/icons/ubication.png')}/>
                    <Text style={styles.textCard}>{direction}</Text>
                </View>
                <View style={styles.flexDirectionRow}>
                    <Image style={styles.icons} source={require('../img/icons/rooms.png')}/>
                    <Text style={[styles.textCard, {fontWeight:'bold',color:'black'}]}>{rooms}</Text>
                    <Image style={styles.icons} source={require('../img/icons/toilet.png')}/>
                    <Text style={[styles.textCard, {fontWeight:'bold',color:'black'}]}>{toilet}</Text>
                    <Image style={styles.icons} source={require('../img/icons/ft.png')}/>
                    <Text style={[styles.textCard, {fontWeight:'bold',color:'black'}]}>{ft}</Text>
                </View>
                <View style={styles.flexDirectionRow}>
                    <Text style={[styles.cardTitle,{marginEnd:'auto'}]}>{price}</Text> 
                    <Image style={styles.iconsDestacable} source={require('../img/icons/fav.png')}/>
                </View>   
            </View>
            
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} 
        image={item.image}
        direction={item.direction}
        price={item.price}
        rooms={item.rooms}
        toilet={item.toilet}
        ft={item.ft}
        points={item.points}
        />
      );

      return(
        <View>
          <FlatList
            data={INFO}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      );
};

export default Card;