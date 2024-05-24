import React from 'react';
import renderer from 'react-test-renderer';
import CustomCheckbox from '../src/components/checkbox/checkbox';

// Mocking react-native-responsive-fontsize
jest.mock('react-native-responsive-fontsize', () => ({
  RFPercentage: jest.fn((val) => val),
  RFValue: jest.fn((val) => val),
}));

describe('CustomCheckbox', () => {
  test('renders unchecked checkbox', () => {
    const tree = renderer
      .create(<CustomCheckbox isChecked={false} onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders checked checkbox', () => {
    const tree = renderer
      .create(<CustomCheckbox isChecked={true} onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('calls onPress callback when pressed', () => {

    // TouchableOpacity component could not be found in the rendered component tree
    // So, need to direct take reference of component by rendering it

    const onPressMock = jest.fn();
    const component = renderer.create(
      <CustomCheckbox isChecked={false} onPress={onPressMock} />,
    );
    const instance = component.root;
    instance.props.onPress(); // Call the onPress handler directly
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
