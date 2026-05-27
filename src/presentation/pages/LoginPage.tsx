import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/AppHeader';

export default function LoginPage() {
  const history = useHistory();
  return (
    <IonPage>
      <AppHeader title="FinMate Mobile" />
      <IonContent className="ion-padding">
        <section className="hero-card">
          <h1>Control financiero simple</h1>
          <p>Registra ingresos, gastos, metas y alertas desde el móvil.</p>
        </section>
        <IonItem><IonLabel position="stacked">Correo</IonLabel><IonInput type="email" placeholder="johan@example.com" /></IonItem>
        <IonItem><IonLabel position="stacked">Contraseña</IonLabel><IonInput type="password" placeholder="********" /></IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={() => history.push('/dashboard')}>Entrar</IonButton>
        <IonText color="medium"><p>Versión académica: autenticación local simulada.</p></IonText>
      </IonContent>
    </IonPage>
  );
}
