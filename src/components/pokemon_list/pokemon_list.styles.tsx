import { StyleSheet } from "react-native";
import { Colors, FontName, ResponsivePixels } from "../../utils";

export const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: Colors.SilverGray,
    borderWidth: 1,
    borderRadius: ResponsivePixels.size8,
    paddingHorizontal: ResponsivePixels.size8,
    margin: ResponsivePixels.size10,
  },
  viewToggle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: ResponsivePixels.size16,
  },
  selected: {
    fontFamily: FontName.poppins_bold,
    color: Colors.BiceBlue,
  },
  unselected: {
    color: Colors.CyanBlue,
  },
});