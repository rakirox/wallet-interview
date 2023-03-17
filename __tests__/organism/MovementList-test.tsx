/**
 * @format
 */

import 'react-native';
import React from 'react';
import {MovementsList} from '../../src/organism/MovementsList';
import {movements} from '../mock.json';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('MovementsList - render correctly', () => {
  expect(
    renderer.create(
      <MovementsList data={movements} onMovementPressed={jest.fn()} />,
    ),
  ).toMatchSnapshot();
});
