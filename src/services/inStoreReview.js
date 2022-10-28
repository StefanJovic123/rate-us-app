import { Linking, Platform } from 'react-native';

const APP_STORE_LINK = `itms-apps://apps.apple.com/app/id1453817491?action=write-review`;
const PLAY_STORE_LINK = `market://details?id=com.racketpal`;

const STORE_LINK = Platform.select({
  ios: APP_STORE_LINK,
  android: PLAY_STORE_LINK,
});

export const openReviewInStore = () => Linking.openURL(STORE_LINK)