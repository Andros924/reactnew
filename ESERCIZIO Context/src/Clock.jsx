import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // Importa il contesto

const Clock = () => {
  const { language } = useContext(LanguageContext);

  const getTimeMessage = () => {
    const date = new Date();
    switch (language) {
      case 'en':
        return `Current time: ${date.toLocaleTimeString()}`;
      case 'it':
        return `Ora attuale: ${date.toLocaleTimeString('it-IT')}`;
      default:
        return `Current time: ${date.toLocaleTimeString()}`;
    }
  };

  return (
    <div>
      {getTimeMessage()}
    </div>
  );
};

export default Clock;
