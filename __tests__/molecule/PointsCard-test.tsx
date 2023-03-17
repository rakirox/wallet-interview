/**
 * @format
 */

import 'react-native';
import React from 'react';
import {PointsCard} from '../../src/molecule/PointsCard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('PointsCard', () => {
  it('render correctly', () => {
    expect(
      renderer.create(
        <PointsCard title="Hello Femsa" points={10000} loading={false} />,
      ),
    ).toMatchSnapshot();
  });

  it('render correctly loading true', () => {
    expect(
      renderer.create(
        <PointsCard title="Hello Femsa" points={10000} loading={true} />,
      ),
    ).toMatchSnapshot();
  });
});
