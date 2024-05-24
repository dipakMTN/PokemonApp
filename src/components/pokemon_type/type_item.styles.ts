import { Colors, FontName, FontSize, ResponsivePixels } from '@/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: ResponsivePixels.size8,
  },
  selected: {
    fontFamily: FontName.poppins_semibold,
    color: Colors.BiceBlue,
    paddingVertical: ResponsivePixels.size8,
    fontSize: FontSize.fontSize16
  },
  unselected: {
    paddingVertical: ResponsivePixels.size8,
    color: Colors.Black,
    fontFamily: FontName.poppins_regular,
    fontSize: FontSize.fontSize16
  },
});
