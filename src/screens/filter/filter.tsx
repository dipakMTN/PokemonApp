import React from 'react';
import {FlatList} from 'react-native';
import {styles} from './filter.styles';
import {useFilterController} from './filter.controller';
import Container from '@/hoc/container';
import Header from '@/components/header/header';
import TypeItem from '@/components/pokemon_type/type_item';

const FilterScreen = () => {
  const {types, selectedType, handleSelectType, handleCancelPressed} =
    useFilterController();

  return (
    <Container>
      <Header
        title="Filter By Type"
        iconSymbol="close"
        onIconPress={handleCancelPressed}
      />
      <FlatList
        data={types}
        style={styles.flatListContainer}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TypeItem
            name={item.name}
            isSelected={item.name === selectedType}
            onSelect={handleSelectType}
          />
        )}
        ListHeaderComponent={
          <TypeItem
            name="all"
            isSelected={selectedType === 'all'}
            onSelect={handleSelectType}
          />
        }
      />
    </Container>
  );
};

export default FilterScreen;
