import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Clock from './Clock';

const App = () => {
  return (
    <LanguageProvider>
      <Clock />
    </LanguageProvider>
  );
};

export default App;
