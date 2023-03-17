import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {TemplateInformative} from '../../src/template/TemplateInformative';
import {movements} from '../mock.json';
import {TouchableOpacity} from 'react-native';
import {TitleComposition} from '../../src/molecule/TitleComposition';
import {PointsCard} from '../../src/molecule/PointsCard';
import {MovementsList} from '../../src/organism/MovementsList';
import {Button} from '../../src/atom/Button';

describe('TemplateInformative', () => {
  it('render correctly', () => {
    expect(
      renderer.create(
        <TemplateInformative
          headerContent={
            <TitleComposition
              title="Bienvenido de vuelta!"
              subtitle="Ruben Rodriguez"
            />
          }
          firstSectionTitle="Tus Puntos"
          firstSectionContent={
            <PointsCard
              title="Diciembre"
              points={movements.reduce(
                (acc, item) =>
                  acc + (item.isRedemption ? -item.points : item.points),
                0,
              )}
              loading={false}
            />
          }
          scrollContentTitle="tus movimientos"
          scrollContent={
            <MovementsList data={movements} onMovementPressed={jest.fn()} />
          }
          footContent={<Button text="Todos" onPress={jest.fn()} />}
        />,
      ),
    ).toMatchSnapshot();
  });
});
