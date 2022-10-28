import React from 'react';
import { VStack, Button } from 'native-base';
import { Screen } from '../../components';
import storage from '../../services/storage';

const Home = ({ navigation }) => {
  const clearStorage = async () => {
    await (await storage()).clear();
  }

  const activateVariant1 = async () => {
    await (await storage()).setItem('experiment', 'false');
    navigation.navigate('TestingScreen')
  }

  const activateVariant2 = async () => {
    await (await storage()).setItem('experiment', 'true');
    navigation.navigate('TestingScreen')
  }

  return (
    <Screen>
      <VStack p={4} space={3} justifyContent='center' flex={1}>
        <Button onPress={clearStorage}>Clear config and storage (Reset)</Button>
        <Button onPress={activateVariant1}>Control (Variant 1)</Button>
        <Button onPress={activateVariant2}>Test (Variant 2)</Button>
      </VStack>
    </Screen>
  );
};

export default Home;
