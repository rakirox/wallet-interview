/**
 * @format
 */

import 'react-native';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../../src/atom/Button';
import renderer from 'react-test-renderer';

describe('Button Tests', () => {
  it('render correctly', () => {
    expect(
      renderer.create(<Button text="Hello Femsa" onPress={jest.fn} />),
    ).toMatchSnapshot();
  });
  it('event fired', () => {
    const mockFn = jest.fn();
    const {UNSAFE_getByType} = render(
      <Button onPress={mockFn} text="Hello Femsa" />,
    );
    fireEvent.press(UNSAFE_getByType(TouchableOpacity));
    expect(mockFn).toBeCalled();
  });
});
