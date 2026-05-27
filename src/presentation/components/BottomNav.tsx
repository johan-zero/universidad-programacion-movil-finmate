import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, list, flag, notifications, settings } from 'ionicons/icons';

export default function BottomNav() {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="dashboard" href="/dashboard"><IonIcon icon={home} /><IonLabel>Inicio</IonLabel></IonTabButton>
      <IonTabButton tab="transactions" href="/transactions"><IonIcon icon={list} /><IonLabel>Movimientos</IonLabel></IonTabButton>
      <IonTabButton tab="goals" href="/goals"><IonIcon icon={flag} /><IonLabel>Metas</IonLabel></IonTabButton>
      <IonTabButton tab="alerts" href="/alerts"><IonIcon icon={notifications} /><IonLabel>Alertas</IonLabel></IonTabButton>
      <IonTabButton tab="settings" href="/settings"><IonIcon icon={settings} /><IonLabel>Ajustes</IonLabel></IonTabButton>
    </IonTabBar>
  );
}
