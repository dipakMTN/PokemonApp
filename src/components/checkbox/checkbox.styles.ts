import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 24,
      height: 24,
      borderWidth: 1,
      borderColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    checked: {
      backgroundColor: '#007AFF',
    },
    checkmark: {
      color: '#fff',
      fontSize: 16,
    },
  });