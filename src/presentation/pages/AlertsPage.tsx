import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { alertCircleOutline, checkmarkCircleOutline, flagOutline } from 'ionicons/icons';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { useFinance } from '../../app/FinanceContext';

export default function AlertsPage() {
  const { summary, settings, goals } = useFinance();
  const warning = summary.warningLevel !== 'ok';
  return (
    <IonPage>
      <AppHeader title="Alertas" />
      <IonContent className="ion-padding finmate-content">
        <section className="finmate-card">
          <h3><IonIcon icon={warning ? alertCircleOutline : checkmarkCircleOutline} style={{ marginRight:8 }} />Control de gastos</h3>
          <p>{settings.alertsEnabled ? (warning ? 'El porcentaje de gasto requiere revisión antes de finalizar el periodo.' : 'El nivel de gasto se encuentra dentro del rango definido para el prototipo.') : 'Las alertas locales se encuentran desactivadas desde Ajustes.'}</p>
        </section>
        {goals.map((goal) => <section className="finmate-card" key={goal.id}><h3><IonIcon icon={flagOutline} style={{ marginRight:8 }} />{goal.title}</h3><p>Meta en seguimiento. Se recomienda mantener aportes periódicos para alcanzar el objetivo.</p></section>)}
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}
