# Pokemon App - Practical

This project is a React Native application that implements a user home page for displaying Pokémon data. The application provides features like displaying Pokémon in both column and list views, a search box for filtering Pokémon, and a filter icon that opens a screen to filter Pokémon types.

## Requirements

1. Design and implement the home page using React function components.
2. Retrieve Pokémon type data from the `/type` endpoint of the PokeAPI and display it in the filter screen.
3. Add a checkbox called "All" in the filter screen that retrieves all Pokémon data with pagination using the provided Pokémon list API endpoint.
4. Implement functionality so that clicking different tabs in the left navigation bar displays Pokémon of the corresponding type in the list. Allow users to switch between grid and list views.
5. Ensure that when switching tabs, any ongoing API calls related to Pokémon data retrieval are aborted to avoid unnecessary overhead.

## API Endpoints

- Pokémon List (with pagination): [https://pokeapi.co/api/v2/pokemon?limit=20&offset=0](https://pokeapi.co/api/v2/pokemon?limit=20&offset=0)
- Pokémon Type: [https://pokeapi.co/api/v2/type](https://pokeapi.co/api/v2/type)
- Pokémon List Based on Type: [https://pokeapi.co/api/v2/type/fire](https://pokeapi.co/api/v2/type/fire)

## Expectations

- Use function components exclusively.
- Implement the code in TypeScript following proper coding conventions.
- Ensure a user-friendly and responsive design.
- Utilize RTK or Redux for global state management for data handling.
- Modularize components to improve code organization and maintainability.
- Optimize application performance for better user experience.
- Optional: Write Jest test cases for component-level testing.

## Usage

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
npm install
```

3. Run the application:

```
npm start
```

## Technologies Used

- React Native
- TypeScript
- Redux Toolkit (RTK)
- Jest (for testing)
- React Navigation

## Folder Structure

```
|-- src
    |-- components
    |-- hoc
    |-- navigation
    |-- screens
    |-- setup
    |-- store
    |-- types
    |-- utils
|-- App.tsx
|-- ...
```

## License

This project is licensed under the [MIT License](LICENSE).
