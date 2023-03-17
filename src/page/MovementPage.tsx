import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '../atom/Button';
import {Text} from '../atom/Text';
import {MovementDetail} from '../molecule/MovementDetail';
import {TemplateInmersive} from '../template/TemplateImmersive';
import {Movement} from '../types/Movement';

type Props = PropsWithChildren<{
  navigation: any;
  route: {
    params: {
      movement: Movement;
    };
  };
}>;

export function MovementPage({navigation, route}: Props): JSX.Element {
  const {movement} = route.params;
  console.log({movement});

  return (
    <TemplateInmersive
      headerContent={<Text style={styles.title}>{movement.product}</Text>}
      mainContent={<MovementDetail movement={movement} />}
      footContent={<Button text="Aceptar" onPress={() => navigation.pop()} />}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'black',
  },
});
