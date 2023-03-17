/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ErrorInfo} from '../../src/atom/ErrorInfo';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('ErrorInfo - render correctly', () => {
  expect(renderer.create(<ErrorInfo text="Hello Femsa" />)).toMatchSnapshot();
});
