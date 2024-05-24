import {StyleSheet} from 'react-native';
import { Colors, FontName, FontSize, ResponsivePixels } from '@/utils';

export const styles = StyleSheet.create({
  searchBar: {
    height: ResponsivePixels.size40,
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
    fontFamily: FontName.poppins_semibold,
    fontSize: FontSize.fontSize16,
    color: Colors.BiceBlue,
    textDecorationLine: 'underline'
  },
  unselected: {
    color: Colors.BiceBlue,
    fontFamily: FontName.poppins_semibold,
    fontSize: FontSize.fontSize16,
  },
  errorText: {
    fontFamily: FontName.poppins_bold,
    color: Colors.Red,
  },
});
