import { IonContent, IonItem, IonLabel, IonList, IonPage, IonToggle } from '@ionic/react';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { useFinance } from '../../app/FinanceContext';

export default function SettingsPage() {
  const { settings, updateSettings } = useFinance();
  return (
    <IonPage>
      <AppHeader title="Ajustes" />
      <IonContent className="ion-padding finmate-content">
        <section className="finmate-card">
          <IonList lines="full">
            <IonItem><IonLabel>Alertas locales</IonLabel><IonToggle checked={settings.alertsEnabled} onIonChange={(event) => updateSettings({ alertsEnabled: event.detail.checked })}/></IonItem>
            <IonItem><IonLabel>Modo oscuro</IonLabel><IonToggle checked={settings.darkMode} onIonChange={(event) => updateSettings({ darkMode: event.detail.checked })}/></IonItem>
            <IonItem><IonLabel>Almacenamiento local</IonLabel><IonToggle checked disabled /></IonItem>
          </IonList>
        </section>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
