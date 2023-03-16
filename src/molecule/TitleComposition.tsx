import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../atom/Text';

type Props = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

export function TitleComposition({title, subtitle}: Props): JSX.Element {
  return (
    <>
      <Text style={styles.titleWelcome}>{title}</Text>
      <Text style={styles.subtitleWelcome}>{subtitle}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  titleWelcome: {
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 27.32,
    color: '#020202',
  },
  subtitleWelcome: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27.32,
    color: '#020202',
  },
});
