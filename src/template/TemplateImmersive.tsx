import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

type TemplateProps = PropsWithChildren<{
  mainContent: JSX.Element;
  headerContent: JSX.Element;
  footContent: JSX.Element;
}>;

export function TemplateInmersive({
  headerContent,
  footContent,
  mainContent,
}: TemplateProps): JSX.Element {
  return (
    <View style={styles.flex}>
      <View style={styles.fakeBG} />
      <SafeAreaView style={styles.flex}>
        <View style={styles.headerContainer}>{headerContent}</View>
        <View style={styles.container}>
          <View style={styles.mainContent}>{mainContent}</View>
          <View style={styles.footContent}>{footContent}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  fakeBG: {
    height: '50%',
    width: '100%',
    backgroundColor: '#CFD6FF',
    position: 'absolute',
    top: 0,
  },
  flex: {
    flex: 1,
  },
  footContent: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingVertical: 22,
    paddingHorizontal: 20,
  },
  mainContent: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
});
