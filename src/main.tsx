import React from 'react';
import { createRoot } from 'react-dom/client';
import { IonApp, setupIonicReact } from '@ionic/react';
import AppRoutes from './app/AppRoutes';
import '@ionic/react/css/core.css';
import './theme/variables.css';

setupIonicReact();

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IonApp>
      <AppRoutes />
    </IonApp>
  </React.StrictMode>
);
