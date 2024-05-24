import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { styles } from './pokemon_grid_view.style';
import Images from '@/utils/Images';
import { Pokemon } from '@/types';

/**
 * PokemonGridView component that renders a grid view of Pokemon items.
 * 
 * @component
 * 
 * @param {Object} props - The props for the component.
 * @param {Pokemon[]} props.pokemons - An array of Pokemon objects to render.
 * @param {() => void} props.loadMorePokemons - Function to call when more Pokemon need to be loaded.
 * 
 * @returns {JSX.Element} The rendered PokemonGridView component.
 */

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
