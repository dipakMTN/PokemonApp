import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FilterController } from './filter.types';
import { NavigationProps } from '@/setup/routes';
import { RootState } from '@/store/store';
import { fetchPokemons, fetchTypes, setSelectedType } from '@/store/pokemonSlice';

export const useFilterController = (): FilterController => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const { types, selectedType } = useSelector((state: RootState) => state.pokemon);
  const ITEMS_PER_PAGE = 50;

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleSelectType = useCallback((type: string) => {
    dispatch(setSelectedType(type));
    dispatch(fetchPokemons(ITEMS_PER_PAGE));
  }, [dispatch]);

  const handleCancelPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    types,
    selectedType,
    handleSelectType,
    handleCancelPressed,
  };
};
