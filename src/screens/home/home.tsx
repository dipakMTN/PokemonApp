import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header/header';
import PokemonList from '../../components/pokemon_list/pokemon_list';
import { useHomeController } from './home.controller';
import { styles } from './home.styles';

const HomeScreen = () => {
  const { handleFilterPress } = useHomeController();

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

export default HomeScreen;
