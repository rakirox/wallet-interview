import camelcase from 'camelcase-keys';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button} from '../atom/Button';
import {ErrorInfo} from '../atom/ErrorInfo';
import {PointsCard} from '../molecule/PointsCard';
import {TitleComposition} from '../molecule/TitleComposition';
import {MovmentsList} from '../organism/MovmentsList';
import {TemplateInformative} from '../template/TemplateInformative';
import {Movement} from '../types/Movement';

const URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';

type Props = PropsWithChildren<{
  navigation: any;
}>;

export function Home({navigation}: Props): JSX.Element {
  const [filter, setFilter] = useState<'all' | 'redeemed' | 'non-redeemed'>(
    'all',
  );
  const [movements, setMovements] = useState<Movement[]>([]);
  const [displayedMovements, setDisplayedMovements] =
    useState<Movement[]>(movements);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        const toJson = await response.json();
        setMovements(
          camelcase(toJson).sort(
            (m1: Movement, m2: Movement) =>
              new Date(m2.createdAt) - new Date(m1.createdAt),
          ),
        );
        setLoading(false);
      } catch (e) {
        setError(new Error('Error catching data'));
      }
    };

    getData();
  }, []);

  useEffect(() => {
    let nDM = null;
    if (filter === 'redeemed') {
      nDM = movements.filter(m => m.isRedemption);
    } else if (filter === 'non-redeemed') {
      nDM = movements.filter(m => !m.isRedemption);
    } else {
      nDM = movements;
    }

    setDisplayedMovements(nDM);
    setLoading(false);
  }, [filter, movements]);

  let buttonSet = (
    <Button
      text="Todos"
      onPress={() => {
        setLoading(true);
        setFilter('all');
      }}
    />
  );

  if (filter === 'all') {
    buttonSet = (
      <View style={styles.buttonContainer}>
        <Button
          text="Gandos"
          onPress={() => {
            setLoading(true);
            setFilter('non-redeemed');
          }}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          text="Canjeados"
          onPress={() => {
            setLoading(true);
            setFilter('redeemed');
          }}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    );
  }

  let scrollContent = null;
  if (loading) {
    scrollContent = <ActivityIndicator />;
  } else if (error) {
    scrollContent = <ErrorInfo text="obteniendo tu información" />;
  } else {
    scrollContent = (
      <MovmentsList
        data={displayedMovements}
        onMovementPressed={movement =>
          navigation.navigate('MovementPage', {movement})
        }
      />
    );
  }

  return (
    <TemplateInformative
      headerContent={
        <TitleComposition
          title="Bienvenido de vuelta!"
          subtitle="Ruben Rodriguez"
        />
      }
      firstSectionTitle="Tus Puntos"
      firstSectionContent={
        <PointsCard
          title="Diciembre"
          points={displayedMovements.reduce(
            (acc, item) => acc + item.points,
            0,
          )}
          loading={loading}
        />
      }
      scrollContentTitle="tus movimientos"
      scrollContent={scrollContent}
      footContent={buttonSet}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
  },
  buttonText: {
    fontSize: 12,
  },
  buttonLeft: {
    marginRight: 1,
  },
});
