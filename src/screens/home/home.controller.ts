import {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {fetchPokemons, setPageOffset} from '../../store/pokemonSlice';
import {HomeController} from './home.types';

export const useHomeController = (): HomeController => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {pokemons, loading, error, pageOffset} = useSelector(
    (state: RootState) => state.pokemon,
  );

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const ITEMS_PER_PAGE = 50;

  const handleFilterPress = useCallback(() => {
    navigation.navigate('FilterScreen');
  }, [navigation]);

  const loadMorePokemons = useCallback(() => {
    if (searchQuery !== '') {
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
