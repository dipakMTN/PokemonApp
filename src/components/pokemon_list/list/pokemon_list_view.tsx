import React from 'react';
import {View, FlatList, Text, StyleSheet, Image} from 'react-native';
import Images from '../../../utils/Images';
import { styles } from './pokemon_list_view.style';

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
          <View>
            <Text style={styles.pokemonTitle}>{item.name}</Text>
            <Text style={styles.pokemonText}>{"Pokemon Summary : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}</Text>
          </View>
        </View>
      )}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PokemonListView;
