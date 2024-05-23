import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeController } from './home.types';

export const useHomeController = (): HomeController => {
  const navigation = useNavigation<any>();

  const handleFilterPress = useCallback(() => {
    navigation.navigate('FilterScreen');
  }, [navigation]);

  return { handleFilterPress };
};
