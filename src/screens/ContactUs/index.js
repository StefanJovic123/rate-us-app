import React from 'react';
import { VStack, Text } from 'native-base';
import { Screen } from '../../components';

const ContactUs = () => {
  return (
    <Screen>
      <VStack p={4} space={3} justifyContent='center' flex={1}>
        <Text>
          Contact Us Mock Screen
        </Text>
      </VStack>
    </Screen>
  );
};

export default ContactUs;
