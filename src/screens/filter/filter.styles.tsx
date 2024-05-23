import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    paddingHorizontal: 16,
  },
  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  selected: {
    fontWeight: 'bold',
    color: '#007AFF',
    paddingVertical: 8,
  },
  unselected: {
    paddingVertical: 8,
    color: '#000',
  },
});
