import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonGridView = ({ pokemons }: { pokemons: any[] }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.pokemonItem}>
          <Text style={styles.pokemonText}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  pokemonItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  pokemonText: {
    color: '#000',
  },
});

export default PokemonGridView;
