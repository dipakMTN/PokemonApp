import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, fetchTypes, setSelectedType } from '../../store/pokemonSlice';
import { RootState } from '../../store/store';
import Header from '../../components/header/header';
import CustomCheckbox from '../../components/checkbox/checkbox';
import { styles } from './filter.styles';
import { useFilterController } from './filter.controller';

const FilterScreen = () => {

  const {handleCancelPressed} = useFilterController();

  const dispatch = useDispatch();
  const { types, selectedType } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleSelectType = (type: string) => {
    dispatch(setSelectedType(type));
    dispatch(fetchPokemons());
  };

  return (
    <View style={styles.container}>
      <Header
        title="Filter By Type"
        iconSymbol="close"
        onIconPress={handleCancelPressed}
      />
      <FlatList
        data={types}
        style={styles.flatListContainer}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectType(item.name)} style={styles.typeItem}>
            <CustomCheckbox
              isChecked={item.name === selectedType}
              onPress={() => handleSelectType(item.name)}
            />
            <Text style={item.name === selectedType ? styles.selected : styles.unselected}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <TouchableOpacity onPress={() => handleSelectType('all')} style={styles.typeItem}>
            <CustomCheckbox
              isChecked={selectedType === 'all'}
              onPress={() => handleSelectType('all')}
            />
            <Text style={selectedType === 'all' ? styles.selected : styles.unselected}>
              All
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default FilterScreen;
