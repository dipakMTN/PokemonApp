import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import  Header  from '../src/components/header/header.tsx';
import { FontSize } from '../src/utils/FontSize';
import { Colors } from '../src/utils/Colors';

// Mocking react-native-vector-icons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

// Mocking react-native-responsive-fontsize
jest.mock('react-native-responsive-fontsize', () => ({
  RFPercentage: jest.fn((val) => val),
  RFValue: jest.fn((val) => val),
}));

describe('Header Component', () => {
  it('should render the title correctly', () => {
    const { getByText } = render(<Header title="Test Title" iconSymbol="menu" onIconPress={() => {}} />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.props.style).toEqual(expect.objectContaining({ fontSize: FontSize.fontSize24 }));
  });

  it('should render the icon with the correct symbol', () => {
    const { getByTestId } = render(<Header title="Test Title" iconSymbol="menu" onIconPress={() => {}} />);
    const iconElement = getByTestId('header-icon');
    expect(iconElement.props.name).toBe('menu');
    expect(iconElement.props.size).toBe(FontSize.fontSize24);
    expect(iconElement.props.color).toBe(Colors.Black);
  });

  it('should call onIconPress when the icon is pressed', () => {
    const mockPressHandler = jest.fn();
    const { getByTestId } = render(<Header title="Test Title" iconSymbol="menu" onIconPress={mockPressHandler} />);
    const iconElement = getByTestId('header-icon');
    fireEvent.press(iconElement);
    expect(mockPressHandler).toHaveBeenCalledTimes(1);
  });
});
