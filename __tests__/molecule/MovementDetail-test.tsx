/**
 * @format
 */

import 'react-native';
import React from 'react';
import {MovementDetail} from '../../src/molecule/MovementDetail';
import {movements} from '../mock.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('MovementDetail - render correctly', () => {
  expect(
    renderer.create(<MovementDetail movement={movements[0]} />),
  ).toMatchSnapshot();
});
