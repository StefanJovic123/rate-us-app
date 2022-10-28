import React, { useEffect } from 'react';
import { VStack, Button } from 'native-base';
import Emitter from '../../services/emitter';
import { Screen } from '../../components';
import { EVENTS } from '../../constants';
import Storage from '../../services/storage';

const TestingScreen = ({ navigation }) => {
  useEffect(() => {
    Emitter.on(EVENTS.NAVIGATE_TO_CONTACT_US_SCREEN, async () => {
      const storage = await Storage();
      if (storage.experiment) {
        navigation.navigate('ContactUs');
      }
    });

    return () => {
      Emitter.off(EVENTS.NAVIGATE_TO_CONTACT_US_SCREEN);
    }
  }, []);

  const triggerAction = () => {
    Emitter.emit(EVENTS.SHOW_RATE_US_ALERT);
  };

  return (
    <Screen>
      <VStack p={4} space={3} justifyContent='center' flex={1}>
        <Button onPress={triggerAction}>Create public game</Button>
        <Button onPress={triggerAction}>Join a game</Button>
        <Button onPress={triggerAction}>Invite users to a game</Button>
        <Button onPress={triggerAction}>Accept invitation</Button>
      </VStack>
    </Screen>
  );
};

export default TestingScreen;
