import React, { createContext, useState, useRef, useEffect } from 'react';
import { WSS_CONNECTION } from '../constants';
import messageHandler from './messageHandler';

export const WebsocketContext = createContext(false, () => {});
//                                            ready, send

// Make sure to put WebsocketProvider higher up in
// the component tree than any consumers.
export const WebsocketProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket(WSS_CONNECTION);

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => {
      messageHandler(event.data);
    };

    // TODO: send unique connection ID based on which messages that should not be received by this client
    // filtered out

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const ret = [isReady, ws?.current?.send.bind(ws.current)];

  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  );
};