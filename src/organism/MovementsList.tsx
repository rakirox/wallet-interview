import React, {PropsWithChildren} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {MovementItem} from '../molecule/MovementItem';
import {Movement} from '../types/Movement';

type Props = PropsWithChildren<{
  data: Movement[];
  onMovementPressed: (movement: Movement) => void;
}>;

export function MovementsList({data, onMovementPressed}: Props): JSX.Element {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}): JSX.Element => {
        return (
          <MovementItem
            movement={item}
            onPress={() => onMovementPressed(item)}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
