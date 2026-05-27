import { IonContent, IonItem, IonLabel, IonList, IonPage, IonToggle } from '@ionic/react';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

export default function SettingsPage() {
  return (
    <IonPage>
      <AppHeader title="Ajustes" />
      <IonContent className="ion-padding">
        <IonList>
          <IonItem><IonLabel>Alertas locales</IonLabel><IonToggle checked /></IonItem>
          <IonItem><IonLabel>Modo oscuro</IonLabel><IonToggle /></IonItem>
          <IonItem><IonLabel>Almacenamiento local standalone</IonLabel><IonToggle checked disabled /></IonItem>
        </IonList>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
