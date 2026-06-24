import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { formatCurrency } from '../../core/formatCurrency';
import { useFinance } from '../../app/FinanceContext';

export default function TransactionsPage() {
  const history = useHistory();
  const { transactions, loading } = useFinance();
  return (
    <IonPage>
      <AppHeader title="Movimientos" />
      <IonContent className="ion-padding finmate-content">
        <IonButton expand="block" onClick={() => history.push('/transactions/new')}><IonIcon slot="start" icon={addCircleOutline} />Agregar movimiento</IonButton>
        <section className="finmate-card" style={{ marginTop:16 }}>
          <h3>Historial</h3>
          {loading ? <p>Cargando...</p> : transactions.length === 0 ? <p className="transaction-meta">Aún no hay movimientos registrados.</p> : transactions.map((item) => (
            <div key={item.id} style={{ display:'flex', justifyContent:'space-between', gap:12, padding:'13px 0', borderBottom:'1px solid var(--finmate-border)' }}>
              <div><strong>{item.category}</strong><div className="transaction-meta">{new Date(item.date).toLocaleDateString('es-CO')} - {item.note || 'Sin nota'}</div></div>
              <div className={item.type === 'income' ? 'transaction-income' : 'transaction-expense'}>{item.type === 'income' ? '+' : '-'} {formatCurrency(item.amount)}</div>
            </div>
          ))}
        </section>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
