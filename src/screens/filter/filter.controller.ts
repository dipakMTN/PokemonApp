import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FilterController } from './filter.types';
import { NavigationProps } from '@/setup/routes';
import { RootState } from '@/store/store';
import { fetchPokemons, fetchTypes, setSelectedType } from '@/store/pokemonSlice';

/**
 * Custom hook for managing filter-related logic.
 * 
 * @returns {FilterController} The filter controller object.
 */

export const useFilterController = (): FilterController => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  // Select necessary data from the Redux store
  const { types, selectedType } = useSelector((state: RootState) => state.pokemon);
  const ITEMS_PER_PAGE = 50;

  // Fetch types when the component mounts
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  // Callback to handle selecting a type
  const handleSelectType = useCallback((type: string) => {
    dispatch(setSelectedType(type));
    dispatch(fetchPokemons(ITEMS_PER_PAGE));
  }, [dispatch]);

  // Callback to close the filter process
  const handleCancelPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Return the filter controller object
  return {
    types,
    selectedType,
    handleSelectType,
    handleCancelPressed,
  };
};
