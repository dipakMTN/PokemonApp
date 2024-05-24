import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomCheckbox from '@/components/checkbox/checkbox';
import {styles} from './type_item.styles';
import {TypeItemProps} from './type_item.types';

/**
 * TypeItem component that represents an item in a list of types with a checkbox.
 * 
 * @component
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.name - The name of the type.
 * @param {boolean} props.isSelected - Determines whether the type is selected.
 * @param {(name: string) => void} props.onSelect - Function to call when the type is selected.
 * 
 * @returns {JSX.Element} The rendered TypeItem component.
 */

const TypeItem: React.FC<TypeItemProps> = ({name, isSelected, onSelect}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(name)} style={styles.typeItem}>
      <CustomCheckbox isChecked={isSelected} onPress={() => onSelect(name)} />
      <Text style={isSelected ? styles.selected : styles.unselected}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default TypeItem;
