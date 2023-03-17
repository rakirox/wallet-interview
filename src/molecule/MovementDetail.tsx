import dayjs from 'dayjs';
import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from '../atom/Image';
import {Text} from '../atom/Text';
import {Movement} from '../types/Movement';

type Props = PropsWithChildren<{
  movement: Movement;
}>;

export function MovementDetail({movement}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.imageContainer}>
          <Image source={{uri: movement.image}} style={styles.image} />
        </View>
      </View>
      <View style={styles.texts}>
        <Text style={styles.detailText}>Detalles del producto</Text>
        <Text style={styles.purchasedText}>{`Comprado el ${dayjs(
          new Date(movement.createdAt),
        )
          .locale('es')
          .format('DD [de] MMMM, YYYY')}`}</Text>
        <Text style={styles.withText}>Con esta compra acomulaste:</Text>
        <Text style={styles.pointsText}>{movement.points} puntos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pointsText: {
    fontSize: 24,
    fontWeight: '800',
  },
  withText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
    marginBottom: 32,
  },
  purchasedText: {
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 20,
  },
  detailText: {
    fontWeight: '800',
    fontSize: 14,
    color: '#9B9898',
    marginBottom: 19,
  },
  texts: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  container: {
    width: '100%',
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 3.84,
    shadowOpacity: 1,
    elevation: 6,
  },
  imageContainer: {
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden',
    height: 350,
  },
  image: {
    flex: 1,
  },
});
