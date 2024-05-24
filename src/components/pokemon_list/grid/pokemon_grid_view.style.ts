import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pokemonItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  pokemonTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  pokemonPlaceholder: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
});
