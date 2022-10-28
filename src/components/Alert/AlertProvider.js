import React, { useState } from 'react';
import AlertContext from './AlertContext';

import { AlertDialog } from "native-base"

const AlertProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const onClose = () => setOpen(false);
  const cancelRef = React.useRef(null);

  const showMessage = (message) => {
    setMessage(message);
    setOpen(true);
  };

  return (
    <>
      <AlertContext.Provider value={{ showMessage }}>{children}</AlertContext.Provider>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        {React.cloneElement(message, { cancelRef, onClose })}
      </AlertDialog>
    </>
  );
};

export default AlertProvider;
