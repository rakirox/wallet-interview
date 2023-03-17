import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {MovementsList} from '../../src/organism/MovementsList';
import {movements} from '../mock.json';
import {TouchableOpacity} from 'react-native';

describe('MovementsList', () => {
  it('render correctly', () => {
    expect(
      renderer.create(
        <MovementsList data={movements} onMovementPressed={jest.fn()} />,
      ),
    ).toMatchSnapshot();
  });
  it('Event fired', () => {
    const mockFn = jest.fn();
    const {UNSAFE_getAllByType} = render(
      <MovementsList onMovementPressed={mockFn} data={movements} />,
    );
    fireEvent.press(UNSAFE_getAllByType(TouchableOpacity)[0]);
    expect(mockFn).toBeCalled();
  });
});
