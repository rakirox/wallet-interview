import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {TemplateInmersive} from '../../src/template/TemplateImmersive';
import {movements} from '../mock.json';
import {Text} from '../../src/atom/Text';
import {MovementDetail} from '../../src/molecule/MovementDetail';
import {Button} from '../../src/atom/Button';

describe('TemplateInmersive', () => {
  it('render correctly', () => {
    expect(
      renderer.create(
        <TemplateInmersive
          headerContent={<Text>{movements[0].product}</Text>}
          mainContent={<MovementDetail movement={movements[0]} />}
          footContent={<Button text="Aceptar" onPress={jest.fn()} />}
        />,
      ),
    ).toMatchSnapshot();
  });
});
