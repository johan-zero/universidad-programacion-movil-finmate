import { IonButton, IonContent, IonIcon, IonPage, IonSpinner } from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { formatCurrency } from '../../core/formatCurrency';
import { useFinance } from '../../app/FinanceContext';

const statusText = {
  ok: 'Estado controlado',
  attention: 'Atención al nivel de gasto',
  critical: 'Nivel de gasto crítico'
};

export default function DashboardPage() {
  const history = useHistory();
  const { summary, loading, transactions } = useFinance();
  if (loading) return <IonPage><AppHeader title="Resumen"/><IonContent className="ion-padding"><IonSpinner/></IonContent></IonPage>;

  return (
    <IonPage>
      <AppHeader title="Resumen financiero" />
      <IonContent className="ion-padding finmate-content">
        <section className="hero-card">
          <p className="metric-label" style={{ color: 'rgba(255,255,255,.85)' }}>Balance disponible</p>
          <h1>{formatCurrency(summary.balance)}</h1>
          <p>Información calculada desde movimientos almacenados localmente.</p>
        </section>
        <section className="finmate-card">
          <span className={`status-${summary.warningLevel}`}>{statusText[summary.warningLevel]}</span>
          <div className="metric-grid">
            <div className="metric-mini"><span>Ingresos</span><strong>{formatCurrency(summary.income)}</strong></div>
            <div className="metric-mini"><span>Gastos</span><strong>{formatCurrency(summary.expenses)}</strong></div>
          </div>
          <IonButton expand="block" className="ion-margin-top" onClick={() => history.push('/transactions/new')}><IonIcon slot="start" icon={addCircleOutline} />Registrar movimiento</IonButton>
        </section>
        <section className="finmate-card">
          <h3>Movimientos recientes</h3>
          {transactions.slice(0, 3).map((item) => <div key={item.id} style={{ display:'flex', justifyContent:'space-between', gap:12, padding:'10px 0', borderBottom:'1px solid var(--finmate-border)' }}><div><strong>{item.category}</strong><div className="transaction-meta">{item.note || 'Sin nota'}</div></div><div className={item.type === 'income' ? 'transaction-income' : 'transaction-expense'}>{item.type === 'income' ? '+' : '-'} {formatCurrency(item.amount)}</div></div>)}
          <IonButton fill="clear" onClick={() => history.push('/transactions')}>Ver historial</IonButton>
        </section>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
