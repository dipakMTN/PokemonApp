import {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { HomeController } from './home.types';
import { NavigationProps } from '@/setup/routes';
import { RootState } from '@/store/store';
import { Pokemon } from '@/types';
import { RouteNames } from '@/utils/route_names';
import { fetchPokemons, setPageOffset } from '@/store/pokemonSlice';

/**
 * Custom hook for managing home screen-related logic.
 * 
 * @returns {HomeController} The home controller object.
 */

export const useHomeController = (): HomeController => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  // Select necessary data from the Redux store
  const {pokemons, loading, error, pageOffset} = useSelector(
    (state: RootState) => state.pokemon,
  );
// State variables for view mode, search query, and filtered pokemons
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const ITEMS_PER_PAGE = 50;

  // Callback to handle navigating to the filter screen
  const handleFilterPress = useCallback(() => {
    navigation.navigate(RouteNames.FilterScreen);
  }, [navigation]);

  // Callback to load more pokemons when reaching the end of the list
  const loadMorePokemons = useCallback(() => {
    if (searchQuery === '') {
      dispatch(setPageOffset(pageIndex + 1));
      setPageIndex(pageIndex + 1);
    }
  }, [dispatch, pageIndex]);

  // Fetch pokemons when the component mounts or pageOffset changes
  useEffect(() => {
    dispatch(fetchPokemons(ITEMS_PER_PAGE));
  }, [dispatch, pageOffset]);

  // Update filtered pokemons based on the search query
  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery, pokemons]);

  // Return the home controller object
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
