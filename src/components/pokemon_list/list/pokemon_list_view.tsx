import React from 'react';
import {View, FlatList, Text, StyleSheet, Image} from 'react-native';
import Images from '../../../utils/Images';
import { styles } from './pokemon_list_view.style';
import { DUMMY_DESCRIPTION } from '../../../utils';

const PokemonListView = ({
  pokemons,
  loadMorePokemons,
}: {
  pokemons: any[];
  loadMorePokemons: () => void;
}) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({item}) => (
        <View style={styles.pokemonItem}>
          <Image
            source={Images.placeholder}
            style={styles.pokemonPlaceholder}
          />
          <View style={styles.textContainer}>
            <Text style={styles.pokemonTitle}>{item.name}</Text>
            <Text style={styles.pokemonText} numberOfLines={2} ellipsizeMode="tail">{"Pokemon Summary : " + DUMMY_DESCRIPTION}</Text>
          </View>
        </View>
      )}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PokemonListView;
