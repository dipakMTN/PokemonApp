import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { CheckBoxProps } from './checkbox.types';
import { styles } from './checkbox.styles';


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
