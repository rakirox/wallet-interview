import React, {PropsWithChildren} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {MovmentItem} from '../molecule/MovementItem';
import {Movement} from '../types/Movement';

type Props = PropsWithChildren<{
  data: Movement[];
  onMovementPressed: (movement: Movement) => void;
}>;

export function MovmentsList({data, onMovementPressed}: Props): JSX.Element {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}): JSX.Element => {
        return (
          <MovmentItem
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
