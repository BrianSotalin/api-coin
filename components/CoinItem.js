import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const CoinItem = ({coin}) => {
  return (
    <View style={styles.containerItem}>
        <View style={styles.coinNames}>
        <Image 
       style={styles.image}
       source={{uri:coin.image}}
       />
     <View style={styles.names}>
     <Text style={styles.text}>{coin.name}</Text>
      <Text style={styles.textSymb}>{coin.symbol}</Text>
     </View>
        </View>
      <View >
      <Text style={styles.prices}>{coin.current_price} $</Text>
      <Text style={[styles.priceChange,coin.market_cap_change_percentage_24h > 0 ? styles.priceUp: styles.priceDown] }>{coin.market_cap_change_percentage_24h}</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
    containerItem:{
paddingTop:10,
flexDirection:'row',
justifyContent:'space-between'
    },
   text:{
       color:'#ffffff'
   },
   image:{
       width:30,
       height:30
   },
   coinNames:{
       flexDirection:'row'
   },
   textSymb:{
       color:'#434343',
       textTransform:'uppercase',
       

   },
   names:{
       marginLeft:10
   },
   prices:{
       textAlign:'right',
       color:'#ffffff'
   },
   priceChange:{
    color:'#434343',
    textAlign:'right'
   },
   priceUp:{
    color:'#2EFE64',
    textAlign:'right'
   },
   priceDown:{
    color:'#FA5858',
    textAlign:'right'
   }
  });
  
export default CoinItem