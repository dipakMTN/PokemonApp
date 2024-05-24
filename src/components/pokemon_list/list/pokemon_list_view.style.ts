import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pokemonItem: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
  },
  pokemonTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  pokemonText: {
    color: '#000',
    marginEnd: 100
  },
  pokemonPlaceholder: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
});