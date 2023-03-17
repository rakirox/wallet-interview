import React, {useState} from 'react';
import {StyleSheet, Image as BaseImage, ImageProps} from 'react-native';

export function Image(tProps: ImageProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <BaseImage
        {...tProps}
        style={[styles.image, tProps.style]}
        onLoadEnd={() => setLoading(false)}
      />
      ;
    </>
  );
}

const styles = StyleSheet.create({
  image: {},
});
