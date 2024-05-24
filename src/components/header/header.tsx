import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './header.styles';
import HeaderProps from './header.types';
import { Colors, FontSize } from '@/utils';

/**
 * Header component that renders a title and an icon.
 * 
 * @component
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.title - The title text to display in the header.
 * @param {string} props.iconSymbol - The symbol name of the icon to display.
 * @param {() => void} props.onIconPress - Function to call when the icon is pressed.
 * 
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC<HeaderProps> = ({ title, iconSymbol, onIconPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onIconPress}>
        <Icon testID="header-icon" name={iconSymbol} size={FontSize.fontSize24} color={Colors.Black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
