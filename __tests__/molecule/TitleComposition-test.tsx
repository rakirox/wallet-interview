/**
 * @format
 */

import 'react-native';
import React from 'react';
import {TitleComposition} from '../../src/molecule/TitleComposition';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('TitleComposition - render correctly', () => {
  expect(
    renderer.create(<TitleComposition title="Hello" subtitle="Femsa" />),
  ).toMatchSnapshot();
});
