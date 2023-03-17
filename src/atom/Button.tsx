import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from './Text';

type Props = {
  text: string;
  onPress: () => void;
  textStyle?: TextStyle;
} & TouchableOpacityProps;

export function Button({
  text,
  onPress,
  style,
  textStyle,
  ...tProps
}: Props): JSX.Element {
  return (
    <TouchableOpacity
      {...tProps}
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle, textStyle]}>{text}</Text>
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
