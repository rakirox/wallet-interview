import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Text} from '../atom/Text';

type Props = PropsWithChildren<{
  title: string;
  points: number;
  loading: boolean;
}>;

export function PointsCard({title, points, loading}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {loading ? (
        <ActivityIndicator style={styles.activityIndicator} color="white" />
      ) : (
        <Text style={styles.points}>
          {`${points.toLocaleString('mxn', {
            minimumFractionDigits: 2,
          })} pts`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  container: {
    backgroundColor: '#334FFA',
    padding: 20,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 3.84,
    shadowOpacity: 1,
    elevation: 6,
    borderRadius: 20,
    minWidth: 280,
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#ffffff',
    marginBottom: 7,
  },
  points: {
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 44,
    color: '#ffffff',
    marginBottom: 50,
    alignSelf: 'center',
  },
});
