import { IonContent, IonPage, IonProgressBar } from '@ionic/react';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { useFinance } from '../../app/FinanceContext';
import { formatCurrency } from '../../core/formatCurrency';

export default function GoalsPage() {
  const { goals } = useFinance();
  return (
    <IonPage>
      <AppHeader title="Metas de ahorro" />
      <IonContent className="ion-padding finmate-content">
        <p className="metric-label">Consulta el progreso de tus objetivos financieros registrados para el prototipo.</p>
        {goals.map((goal) => {
          const progress = Math.min(goal.saved / goal.target, 1);
          return <section className="finmate-card" key={goal.id}><h3>{goal.title}</h3><p>{formatCurrency(goal.saved)} de {formatCurrency(goal.target)}</p><IonProgressBar value={progress}/><p className="transaction-meta">Avance: {Math.round(progress * 100)}%</p></section>;
        })}
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
