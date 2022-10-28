import { EVENTS } from '../../constants';
import Emitter from '../../services/emitter';

const messageHandler = (event) => {
  try {
    const { type } = JSON.parse(event);

    // TODO: do not handle messages that are coming from un-matched connectionId
    // if (type === EVENTS.SHOW_RATE_US_ALERT) {
      Emitter.emit(EVENTS.SHOW_RATE_US_ALERT);
    // }
  } catch (e) {
    console.log('Error handling messages from socket', e);
  }
}

export default messageHandler;
