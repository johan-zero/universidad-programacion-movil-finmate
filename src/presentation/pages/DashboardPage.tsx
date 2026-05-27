import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { formatCurrency } from '../../core/formatCurrency';

export default function DashboardPage() {
  const history = useHistory();
  return (
    <IonPage>
      <AppHeader title="Resumen" />
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader><IonCardTitle>Balance estimado</IonCardTitle></IonCardHeader>
          <IonCardContent>
            <h2>{formatCurrency(820000)}</h2>
            <p>Gastos del mes: {formatCurrency(430000)}</p>
            <p>Estado: controlado</p>
            <IonButton expand="block" onClick={() => history.push('/transactions/new')}>Registrar movimiento</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
