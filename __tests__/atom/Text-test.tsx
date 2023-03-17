/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from '../../src/atom/Text';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Text - render correctly', () => {
  expect(renderer.create(<Text>Hello Femsa!</Text>)).toMatchSnapshot();
});
