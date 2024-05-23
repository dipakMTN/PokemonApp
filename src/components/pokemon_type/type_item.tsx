import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomCheckbox from '../../components/checkbox/checkbox';
import { styles } from './type_item.styles';

interface TypeItemProps {
  name: string;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const TypeItem: React.FC<TypeItemProps> = ({ name, isSelected, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(name)} style={styles.typeItem}>
      <CustomCheckbox
        isChecked={isSelected}
        onPress={() => onSelect(name)}
      />
      <Text style={isSelected ? styles.selected : styles.unselected}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default TypeItem;
