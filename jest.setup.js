/** @type {import('jest').Config} */
import 'react-native-gesture-handler/jestSetup';

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

const config = {
    verbose: true,
};
  
module.exports = config;