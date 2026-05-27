import { IonButton, IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { formatCurrency } from '../../core/formatCurrency';

const sample = [
  { category: 'Salario', amount: 1250000, type: 'Ingreso' },
  { category: 'Transporte', amount: 85000, type: 'Gasto' },
  { category: 'Alimentación', amount: 230000, type: 'Gasto' }
];

export default function TransactionsPage() {
  const history = useHistory();
  return (
    <IonPage>
      <AppHeader title="Movimientos" />
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => history.push('/transactions/new')}>Agregar</IonButton>
        <IonList>{sample.map((item) => <IonItem key={item.category}><IonLabel><h2>{item.category}</h2><p>{item.type} - {formatCurrency(item.amount)}</p></IonLabel></IonItem>)}</IonList>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
