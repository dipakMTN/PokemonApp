import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { styles } from './pokemon_grid_view.style';
import Images from '../../../utils/Images';
import { Pokemon } from '../../../types';

const PokemonGridView = ({ pokemons, loadMorePokemons }: { pokemons: Pokemon[], loadMorePokemons: () => void }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => (
        <View style={styles.pokemonItem}>
          <Image
            source={Images.placeholder}
            style={styles.pokemonPlaceholder}
          />
          <Text style={styles.pokemonTitle}>{item.name}</Text>
        </View>
      )}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
    />
  );
};


export default PokemonGridView;
