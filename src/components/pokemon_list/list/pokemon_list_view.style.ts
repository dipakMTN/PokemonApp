import { Colors, FontName, FontSize, ResponsivePixels } from "@/utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pokemonItem: {
    flex: 1,
    backgroundColor: Colors.LightGray,
    flexDirection: 'row',
    marginHorizontal: ResponsivePixels.size5,
    marginBottom: ResponsivePixels.size10,
    padding: ResponsivePixels.size10
  },
  textContainer: {
    flex: 1,
    flexWrap: 'wrap'
  },
  pokemonTitle: {
    color: Colors.Black,
    fontFamily: FontName.poppins_semibold,
    fontSize: FontSize.fontSize15,
    textTransform: 'capitalize'
  },
  pokemonText: {
    color: Colors.Black,
    maxWidth: '100%'
  },
  pokemonPlaceholder: {
    height: ResponsivePixels.size50,
    width: ResponsivePixels.size50,
    resizeMode: 'contain',
    marginHorizontal: ResponsivePixels.size10
  },
});