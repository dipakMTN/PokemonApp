import { StyleSheet } from "react-native";
import { Colors, FontName, FontSize, ResponsivePixels } from '@/utils';

export const styles = StyleSheet.create({
  pokemonItem: {
    flex: 1,
    margin: FontSize.fontSize10,
    padding: FontSize.fontSize10,
    backgroundColor: Colors.LightGray,
    alignItems: 'center',
  },
  pokemonTitle: {
    color: Colors.Black,
    fontFamily: FontName.poppins_bold,
    fontSize: FontSize.fontSize12,
    marginTop: ResponsivePixels.size10,
    textTransform: 'capitalize'
  },
  pokemonPlaceholder: {
    height: ResponsivePixels.size50,
    width: ResponsivePixels.size50,
    resizeMode: 'contain',
    marginHorizontal: ResponsivePixels.size10
  },
});
