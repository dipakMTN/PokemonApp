import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 10,
  },
  viewToggle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  selected: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  unselected: {
    color: '#007AFF',
  },
});
