import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchPokemons, fetchTypes, setSelectedType } from '../../store/pokemonSlice';
import { RootState } from '../../store/store';
import { FilterController } from './filter.types';

export const useFilterController = (): FilterController => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const { types, selectedType } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleSelectType = useCallback((type: string) => {
    dispatch(setSelectedType(type));
    dispatch(fetchPokemons());
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
