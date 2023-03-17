/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Image} from '../../src/atom/Image';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Image - render correctly', () => {
  expect(
    renderer.create(
      <Image source={{uri: 'https://loremflickr.com/640/480/people'}} />,
    ),
  ).toMatchSnapshot();
});
