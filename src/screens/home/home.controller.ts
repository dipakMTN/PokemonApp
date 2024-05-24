import {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { HomeController } from './home.types';
import { NavigationProps } from '@/setup/routes';
import { RootState } from '@/store/store';
import { Pokemon } from '@/types';
import { RouteNames } from '@/utils/route_names';
import { fetchPokemons, setPageOffset } from '@/store/pokemonSlice';

export const useHomeController = (): HomeController => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const {pokemons, loading, error, pageOffset} = useSelector(
    (state: RootState) => state.pokemon,
  );

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const ITEMS_PER_PAGE = 50;

  const handleFilterPress = useCallback(() => {
    navigation.navigate(RouteNames.FilterScreen);
  }, [navigation]);

  const loadMorePokemons = useCallback(() => {
    if (searchQuery === '') {
      dispatch(setPageOffset(pageIndex + 1));
      setPageIndex(pageIndex + 1);
    }
  }, [dispatch, pageIndex]);

  useEffect(() => {
    dispatch(fetchPokemons(ITEMS_PER_PAGE));
  }, [dispatch, pageOffset]);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery, pokemons]);

  return {
    handleFilterPress,
    loadMorePokemons,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    filteredPokemons,
    loading,
    error,
    pokemons,
  };
};
