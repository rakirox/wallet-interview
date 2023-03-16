import React, {PropsWithChildren} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {MovmentItemRender} from '../molecule/MovementItem';
import {Movement} from '../types/Movement';

type Props = PropsWithChildren<{
  data: Movement[];
}>;

export function MovmentsList({data}: Props): JSX.Element {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={MovmentItemRender}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
