
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Search from './src/components/searchBar';
import Banner from './src/components/bannerMovies';
import Filmes from './src/data/filmes'


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <Banner></Banner>

    <View style={{width:'90%'}}>
    <FlatList 
    
    horizontal ={true}
    data  ={Filmes} 
    keyExtractor = {(item) => item.id}
    renderItem = { ({item})  =>(

      <Text> {item.nome} </Text>

      )} 
      
    />
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
    
  },
});
