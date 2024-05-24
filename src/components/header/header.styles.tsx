import { StyleSheet } from "react-native";
import { FontSize } from "../../utils/FontSize";
import { Colors, FontName, ResponsivePixels } from "../../utils";

export const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: ResponsivePixels.size16,
      backgroundColor: Colors.LightGray,
    },
    title: {
      fontSize: FontSize.fontSize30,
      fontFamily: FontName.poppins_bold,
      color: Colors.Black,
    },
  });