import React, {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from './Text';

type Props = PropsWithChildren<{
  text: string;
}>;

export function ErrorInfo({text}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Error encontrado: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});
