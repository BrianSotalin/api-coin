import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native';
import { useEffect,useState } from 'react';
import CoinItem from './components/CoinItem';


export default function App() {
const [coins , setCoins]=useState([])
const [search,setSearch]=useState('')
const [refreshing,setRefreshing]=useState(false)

const loadData = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    console.log(data);
    setCoins(data)
}
useEffect(()=>{
loadData()

},[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}> S O T A Crypto</Text>
      <TextInput style={styles.search}
      placeholder="Ingrese una criptomoneda"
      onChangeText={text => setSearch(text)}
      />

      <FlatList
  
      style={styles.list}
      data={
        coins.filter((coin) => 
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
        )}
      renderItem={({item}) => {
        return <CoinItem coin={item} />
      }}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={async()=>{
         setRefreshing(true);
         await loadData();
         setRefreshing(false)
      } }
      />
      <StatusBar style="auto" backgroundColor='#58D3F7' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070719',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff'
  },
  title:{
    color:'#2ECCFA',
    marginTop:30,
    fontSize:30
  },
  list:{
    width:'90%'
  },
  search:{
    color:'#ffffff',
    backgroundColor:'#08298A',
    padding:3,
    margin:10,
    borderRadius:20,
    width:'80%',
    textAlign:'center',
    justifyContent:'center',
    fontWeight:'500'
  }
});
