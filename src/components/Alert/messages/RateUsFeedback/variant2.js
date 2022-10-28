import React from 'react';
import { VStack, Button, AlertDialog, Box } from 'native-base'

import Text from '../../../Text';
import StarsBadgeSVG from '../../../../assets/svg/startsBadge';

const RateUsFeedback = ({ cancelRef, onClose, onFeedbackSubmit, handleSkip }) => {
  const submit = async () => {
    await onFeedbackSubmit();
    await onClose();
  }

  const onSkip = async () => {
    if (handleSkip) {
      await handleSkip();
    }
    await onClose();
  }

  return (
    <>
      <AlertDialog.Content background={'white'} backgroundColor='white' px={3}>
        <VStack pt={5} justifyContent={'center'} alignContent='center' alignItems={'center'} space={4}>
          <VStack px={10}><StarsBadgeSVG /></VStack>
          <Text type='title2Black'>Enjoying RacketPal?</Text>
        </VStack>
        <AlertDialog.Body background={'white'}>
          <VStack space={2} justifyContent='center'>
            <Text fontSize={'xs'} textAlign='center'>Your App Store review {'\n'} greatly helps spread the word and {'\n'} grow the racket sports community!</Text>
            
            <Button mt={5} onPress={submit} ref={cancelRef}>
              Rate us
            </Button>

            <Button variant='unstyled' colorScheme='coolGray' onPress={onSkip} fontSize={'xs'} size='sm'>
              Not yet? Give us feedback 
            </Button>
          </VStack>
        </AlertDialog.Body>
      </AlertDialog.Content>
    </>
  );
};

export default RateUsFeedback;