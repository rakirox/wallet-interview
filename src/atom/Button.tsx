import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from './Text';

type Props = {
  text: string;
  onPress: () => void;
} & TouchableOpacityProps;

export function Button({text, onPress, style, ...tProps}: Props): JSX.Element {
  return (
    <TouchableOpacity
      {...tProps}
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#334FFA',
    borderRadius: 10,
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
    alignSelf: 'center',
    paddingVertical: 14,
  },
});
