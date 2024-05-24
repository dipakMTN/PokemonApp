import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './header.styles';
import HeaderProps from './header.types';
import { Colors, FontSize } from '@/utils';

const Header = ({ title, iconSymbol, onIconPress } : HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onIconPress}>
        <Icon name={iconSymbol} size={FontSize.fontSize24} color={Colors.Black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
