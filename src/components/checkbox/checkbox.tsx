import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { CheckBoxProps } from './checkbox.types';
import { styles } from './checkbox.styles';

/**
 * CustomCheckbox component that renders a checkbox with a checkmark.
 * 
 * @component
 * 
 * @param {Object} props - The props for the component.
 * @param {boolean} props.isChecked - Determines whether the checkbox is checked.
 * @param {() => void} props.onPress - Function to call when the checkbox is pressed.
 * 
 * @returns {JSX.Element} The rendered checkbox component.
 */
const CustomCheckbox: React.FC<CheckBoxProps> = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
