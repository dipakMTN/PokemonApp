export interface HomeController {
  handleFilterPress: () => void;
  loadMorePokemons: () => void;
  viewMode: 'grid' | 'list';
  setViewMode: (view: 'grid' | 'list') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPokemons: any[];
  loading: boolean;
  error: string | null;
  pokemons: any[]
}
