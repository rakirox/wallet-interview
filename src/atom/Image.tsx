import React, {useState} from 'react';
import {
  StyleSheet,
  Image as BaseImage,
  ImageProps,
  ActivityIndicator,
  View,
} from 'react-native';

export function Image(tProps: ImageProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <BaseImage
        {...tProps}
        style={[styles.image, tProps.style]}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <View style={styles.absolute}>
          <ActivityIndicator color="rgba(0,0,0,0.5)" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {},
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
