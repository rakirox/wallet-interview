/**
 * @format
 */

import 'react-native';
import React from 'react';
import {MovementItem} from '../../src/molecule/MovementItem';
import {movements} from '../mock.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('MovementItem - render correctly', () => {
  expect(
    renderer.create(
      <MovementItem movement={movements[0]} onPress={jest.fn()} />,
    ),
  ).toMatchSnapshot();
});
