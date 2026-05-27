import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage, IonProgressBar } from '@ionic/react';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

export default function GoalsPage() {
  return (
    <IonPage>
      <AppHeader title="Metas" />
      <IonContent className="ion-padding">
        <IonCard><IonCardHeader><IonCardTitle>Fondo de emergencia</IonCardTitle></IonCardHeader><IonCardContent><p>Avance: 52%</p><IonProgressBar value={0.52}/></IonCardContent></IonCard>
        <IonCard><IonCardHeader><IonCardTitle>Curso profesional</IonCardTitle></IonCardHeader><IonCardContent><p>Avance: 30%</p><IonProgressBar value={0.30}/></IonCardContent></IonCard>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
