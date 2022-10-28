import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = async () => {
  // used for setting A/B testing variants
  const experiment = await AsyncStorage.getItem('experiment');

  const appRated = await AsyncStorage.getItem('appRated');
  const appRatingSkipped = await AsyncStorage.getItem('appRatingSkipped');

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('[Storage] setItem', e);
      alert('Error on setting storage item, check logs!');
    }
  }

  const getItem = async (key) => {
    try {
      return AsyncStorage.getItem(key);
    } catch (e) {
      console.log('[Storage] getItem', e);
      alert('Error on getting storage item, check logs!');
    }
  }

  const clear = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage cleared!');
    } catch (e) {
      console.log('[Storage] clear', e);
      alert('Error on clearing storage, check logs!');
    }
  }

  return {
    appRated: appRated === 'true',
    appRatingSkipped: appRatingSkipped === 'true',
    experiment: experiment === 'true',

    setItem,
    getItem,
    clear,
  };
};

export default storage;
