import React, { createContext, useEffect } from 'react';
import { useAlert, messages } from '../components/Alert';
import { EVENTS } from '../constants';
import Emitter from '../services/emitter';
import { openReviewInStore } from '../services/inStoreReview';
import Storage from '../services/storage';

const { RateUsFeedback } = messages;

export const EventsContext = createContext(null);

const showRateUsAlert = async (alertInstance, navigation) => {
  const storage = await Storage();

  if (storage.appRated || storage.appRatingSkipped) {
    return;
  }
  const FeedbackComponent = storage.experiment ? RateUsFeedback.Variant2 : RateUsFeedback.Variant1;

  return alertInstance.showMessage(
    <FeedbackComponent
      onFeedbackSubmit={async () => {
        await storage.setItem('appRated', 'true');
        await storage.setItem('ratingInProgress', 'false');
      }}
      onRatingChange={async (rating) => {
        if ([4, 5].includes(rating)) {
          await storage.setItem('appRated', 'true');
          await storage.setItem('ratingInProgress', 'false');
          try {
            await openReviewInStore();
          } catch (e) {
            alert('Unable to open store URL!');
          }
          
        }
      }}
      handleSkip={async () => {
        await storage.setItem('appRated', 'false');
        await storage.setItem('appRatingSkipped', 'true');

        if (storage.experiment) {
          // navigate to contact us screen
          Emitter.emit(EVENTS.NAVIGATE_TO_CONTACT_US_SCREEN);
        } else {
          // send event to API
        }
      }}
    />
  );
}

export const EventsProvider = ({ children }) => {
  const alert = useAlert();

  useEffect(() => {
    Emitter.on(
      EVENTS.SHOW_RATE_US_ALERT,
      async () => {
        const storage = await Storage();
        if (!storage.appRated && !storage.appRatingSkipped) {
          setTimeout(() => showRateUsAlert(alert), 0);
        }
      }
    );

    return () => {
      Emitter.off(EVENTS.SHOW_RATE_US_ALERT);
    };
  }, []);

  return (
    <EventsContext.Provider>
      {children}
    </EventsContext.Provider>
  );
};
