import { Colors, ResponsivePixels } from "@/utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: ResponsivePixels.size24,
      height: ResponsivePixels.size24,
      borderWidth: 1,
      borderColor: Colors.BiceBlue,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: ResponsivePixels.size8,
    },
    checked: {
      backgroundColor: Colors.BiceBlue,
    },
    checkmark: {
      color: Colors.White,
      fontSize: ResponsivePixels.size16,
    },
  });