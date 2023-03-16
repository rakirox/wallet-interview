import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from '../atom/Text';

type TemplateProps = PropsWithChildren<{
  firstSectionTitle: string;
  scrollContentTitle: string;
  scrollContent: JSX.Element;
  firstSectionContent: JSX.Element;
  headerContent: JSX.Element;
  footContent: JSX.Element;
}>;

export function TemplateInformative({
  headerContent,
  scrollContentTitle,
  scrollContent,
  footContent,
  firstSectionTitle,
  firstSectionContent,
}: TemplateProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>{headerContent}</View>
      <Text style={styles.title}>{firstSectionTitle}</Text>
      <View style={styles.firsSectionContent}>{firstSectionContent}</View>
      <Text style={styles.title}>{scrollContentTitle}</Text>
      <View style={styles.scrollContext}>{scrollContent}</View>
      <View style={styles.footContent}>{footContent}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footContent: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  title: {
    fontWeight: '800',
    color: '#9B9898',
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: 20,
    marginLeft: 20,
  },
  firsSectionContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollContext: {
    flex: 1,
  },
});
