import React from 'react';
import {StyleSheet, Text as BaseText, TextProps} from 'react-native';

export function Text(tProps: TextProps): JSX.Element {
  return <BaseText {...tProps} style={[styles.text, tProps.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'avenir',
  },
});
