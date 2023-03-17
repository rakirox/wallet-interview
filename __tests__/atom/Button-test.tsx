/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Button} from '../../src/atom/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Button - render correctly', () => {
  expect(
    renderer.create(<Button text="Hello Femsa" onPress={jest.fn} />),
  ).toMatchSnapshot();
});
