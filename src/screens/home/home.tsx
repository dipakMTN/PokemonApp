import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/header/header';
import PokemonList from '../../components/pokemon_list/pokemon_list';

const HomeScreen = ({navigation}) => {

  const handleFilterPress = () => {
    navigation.navigate('FilterScreen')
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Pokémon" 
        iconSymbol="filter-list-alt" 
        onIconPress={handleFilterPress} 
      />
      <PokemonList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
