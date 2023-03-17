import 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import {MovementItem} from '../../src/molecule/MovementItem';
import {movements} from '../mock.json';

describe('MovementItem', () => {
  it('Render correctly', () => {
    expect(
      renderer.create(
        <MovementItem movement={movements[0]} onPress={jest.fn()} />,
      ),
    ).toMatchSnapshot();
  });
  it('Event fired', () => {
    const mockFn = jest.fn();
    const {UNSAFE_getByType} = render(
      <MovementItem onPress={mockFn} movement={movements[0]} />,
    );
    fireEvent.press(UNSAFE_getByType(TouchableOpacity));
    expect(mockFn).toBeCalled();
  });
});
