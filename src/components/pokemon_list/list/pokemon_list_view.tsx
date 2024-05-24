import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { styles } from './pokemon_list_view.style';
import { Pokemon } from '@/types';
import Images from '@/utils/Images';
import { DUMMY_DESCRIPTION } from '@/utils';

/**
 * PokemonListView component that renders a list view of Pokemon items.
 * 
 * @component
 * 
 * @param {Object} props - The props for the component.
 * @param {Pokemon[]} props.pokemons - An array of Pokemon objects to render.
 * @param {() => void} props.loadMorePokemons - Function to call when more Pokemon need to be loaded.
 * 
 * @returns {JSX.Element} The rendered PokemonListView component.
 */
const PokemonListView = ({ pokemons, loadMorePokemons }: { pokemons: Pokemon[], loadMorePokemons: () => void }) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => (
        <View style={styles.pokemonItem}>
          <Image
            source={Images.placeholder}
            style={styles.pokemonPlaceholder}
          />
          <View style={styles.textContainer}>
            <Text style={styles.pokemonTitle}>{item.name}</Text>
            <Text
              style={styles.pokemonText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {'Pokemon Summary : ' + DUMMY_DESCRIPTION}
            </Text>
          </View>
        </View>
      )}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PokemonListView;
