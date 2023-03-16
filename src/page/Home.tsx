import camelcase from 'camelcase-keys';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button} from '../atom/Button';
import {ErrorInfo} from '../atom/ErrorInfo';
import {PointsCard} from '../molecule/PointsCard';
import {TitleComposition} from '../molecule/TitleComposition';
import {MovmentsList} from '../organism/MovmentsList';
import {TemplateInformative} from '../template/TemplateInformative';
import {Movement} from '../types/Movement';

const URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';

export function Home(): JSX.Element {
  const [filter, setFilter] = useState<'all' | 'redeemed' | 'non-redeemed'>(
    'all',
  );
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        const toJson = await response.json();
        setMovements(camelcase(toJson));
        setLoading(false);
      } catch (e) {
        setError(new Error('Error catching data'));
      }
    };

    getData();
  }, []);

  let displayedMovements = movements;
  let buttonSet = <Button text="Todos" onPress={() => setFilter('all')} />;

  if (filter === 'redeemed') {
    displayedMovements = movements.filter(m => m.isRedemption);
  } else if (filter === 'non-redeemed') {
    displayedMovements = movements.filter(m => !m.isRedemption);
  } else {
    buttonSet = (
      <View style={styles.buttonContainer}>
        <Button
          text="Gandos"
          onPress={() => setFilter('non-redeemed')}
          style={styles.button}
        />
        <Button
          text="Canjeados"
          onPress={() => setFilter('redeemed')}
          style={styles.button}
        />
      </View>
    );
  }
  displayedMovements = displayedMovements.sort(
    (m1, m2) => new Date(m2.createdAt) - new Date(m1.createdAt),
  );

  let scrollContent = null;
  if (loading) {
    scrollContent = <ActivityIndicator />;
  } else if (error) {
    scrollContent = <ErrorInfo text="obteniendo tu información" />;
  } else {
    scrollContent = <MovmentsList data={displayedMovements} />;
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
    width: 170,
  },
  buttonLeft: {
    marginRight: 1,
  },
});
