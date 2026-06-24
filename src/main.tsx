import React from 'react';
import { createRoot } from 'react-dom/client';
import { IonApp, setupIonicReact } from '@ionic/react';
import AppRoutes from './app/AppRoutes';
import { FinanceProvider } from './app/FinanceContext';
import './theme/variables.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';

setupIonicReact();

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <React.StrictMode>
    <IonApp>
      <FinanceProvider><AppRoutes /></FinanceProvider>
    </IonApp>
  </React.StrictMode>
);
