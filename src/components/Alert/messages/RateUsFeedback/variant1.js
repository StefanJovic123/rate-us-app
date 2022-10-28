import React, { useState } from 'react';
import { VStack, Button, AlertDialog, Box, TextArea } from "native-base"
import { Rating } from 'react-native-ratings';

import Text from '../../../Text';
import EditPenSVG from '../../../../assets/svg/editPen';

const RateUsFeedback = ({ cancelRef, onClose, onFeedbackSubmit, onRatingChange, handleSkip }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const ratingCompleted = async (rating) => {
    setRating(rating);
    onRatingChange && await onRatingChange(rating);
    if ([4, 5].includes(rating)) {
      await onClose();
    }
  };

  const submitFeedback = async () => {
    await onFeedbackSubmit(feedback);
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
      <Box
        background={'white'}
        p={3}
        rounded='full'
        top={12}
        zIndex={10}
      >
        <EditPenSVG />
      </Box>
      <AlertDialog.Content background={'white'} backgroundColor='white'  px={4}>
        <VStack mt={12} justifyContent={'center'} alignContent='center' alignItems={'center'}>
          <Text type='title1BlackSemibold'>Enjoying RacketPal?</Text>
        </VStack>
        <VStack space={2} mb={2} justifyContent='center' alignItems='center' alignContent='center'>
          <Text type='xsBlack'>Tap a star to rate it on the App store</Text>
          <Rating
            showRating={false}
            startingValue={0}
            onFinishRating={ratingCompleted}
            onSwipeRating={ratingCompleted}
            style={{ paddingVertical: 2 }}
            jumpValue={1}
            minValue={0}
            fractions={20}
            imageSize={35}
          />

          {[1, 2, 3].includes(rating) && (
            <VStack width='100%' space={3} mt={4} pb={4}>
              <VStack space={1}>
                <Text type='xsYellow100Bold'>ANY FEEDBACK FOR US?</Text>
                <TextArea onChangeText={(value) => setFeedback(value)} />
              </VStack>

              <Button colorScheme="yellow" size='sm' onPress={submitFeedback} ref={cancelRef}>
                Submit
              </Button>
            </VStack>
          )}

          {[0, 4, 5].includes(rating) && (
            <Button mt={4} variant="unstyled" colorScheme="gray" size='xs' onPress={onSkip}>
              REMIND ME LATER
            </Button>
          )}
        </VStack>
      </AlertDialog.Content>
    </>
  );
};

export default RateUsFeedback;