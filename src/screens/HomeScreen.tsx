import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';

const HomeScreen = ({navigation}) => {

  const handleFilterPress = () => {
    navigation.navigate('FilterScreen')
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Pokémon" 
        iconSymbol="⚙️" 
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
