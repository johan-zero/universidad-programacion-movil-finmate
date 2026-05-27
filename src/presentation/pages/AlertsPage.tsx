import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

export default function AlertsPage() {
  return (
    <IonPage>
      <AppHeader title="Alertas" />
      <IonContent className="ion-padding">
        <IonCard><IonCardHeader><IonCardTitle>Gasto variable alto</IonCardTitle></IonCardHeader><IonCardContent>Se activará alerta si el gasto variable supera el 70% del ingreso mensual.</IonCardContent></IonCard>
        <IonCard><IonCardHeader><IonCardTitle>Meta pendiente</IonCardTitle></IonCardHeader><IonCardContent>Recordatorio semanal para aportar a la meta activa.</IonCardContent></IonCard>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
