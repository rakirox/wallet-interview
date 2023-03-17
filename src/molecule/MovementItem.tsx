import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import {Text} from '../atom/Text';
import {Movement} from '../types/Movement';

type Props = PropsWithChildren<{
  movement: Movement;
  onPress: () => void;
}>;

export function MovmentItem({movement, onPress}: Props): JSX.Element {
  const label = movement.isRedemption ? (
    <Text style={styles.negative}>-</Text>
  ) : (
    <Text style={styles.positive}>+</Text>
  );
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: movement.image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{movement.product}</Text>
        <Text style={styles.textPCreatedAt}>
          {dayjs(new Date(movement.createdAt))
            .locale('es')
            .format('DD [de] MMMM, YYYY')}
        </Text>
      </View>

      <Text style={styles.textPoints}>
        {label}
        {movement.points}
      </Text>

      <View style={styles.arrowContainer}>
        <Image
          source={require('./../assets/images/subtract.png')}
          style={styles.arrow}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    // flex: 1,
  },
  arrow: {
    width: 10,
    height: 10,
  },
  negative: {
    color: '#FF0000',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
  },
  positive: {
    color: '#00B833',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
  },
  container: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  textProduct: {
    fontWeight: '800',
    fontSize: 14,
    marginBottom: 7,
  },
  textPoints: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    marginRight: 23,
  },
  textPCreatedAt: {
    fontWeight: '400',
    fontSize: 12,
  },
  image: {flex: 1},
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 55,
    height: 55,
    marginRight: 11,
  },
});
