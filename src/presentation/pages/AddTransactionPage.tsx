import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import type { TransactionType } from '../../domain/entities/Transaction';
import { useFinance } from '../../app/FinanceContext';

export default function AddTransactionPage() {
  const history = useHistory();
  const { addTransaction } = useFinance();
  const [type, setType] = useState<TransactionType>('expense');
  const [category, setCategory] = useState('Alimentación');
  const [amount, setAmount] = useState('120000');
  const [note, setNote] = useState('Compra semanal');
  const [message, setMessage] = useState('');

  async function save() {
    try {
      await addTransaction({ type, category, amount: Number(amount), note });
      history.replace('/transactions');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'No fue posible guardar el movimiento.');
    }
  }

  return (
    <IonPage>
      <IonHeader><IonToolbar color="primary"><IonButtons slot="start"><IonBackButton defaultHref="/transactions" /></IonButtons><IonTitle>Nuevo movimiento</IonTitle></IonToolbar></IonHeader>
      <IonContent className="ion-padding finmate-content">
        <section className="finmate-card">
          <p className="metric-label">Completa los campos para registrar un ingreso o gasto local.</p>
          <IonItem lines="none"><IonLabel position="stacked">Tipo</IonLabel><IonSelect value={type} onIonChange={(e) => setType(e.detail.value)}><IonSelectOption value="income">Ingreso</IonSelectOption><IonSelectOption value="expense">Gasto</IonSelectOption></IonSelect></IonItem>
          <IonItem lines="none"><IonLabel position="stacked">Categoría</IonLabel><IonInput value={category} onIonInput={(e) => setCategory(e.detail.value ?? '')}/></IonItem>
          <IonItem lines="none"><IonLabel position="stacked">Valor</IonLabel><IonInput inputMode="numeric" type="number" value={amount} onIonInput={(e) => setAmount(e.detail.value ?? '')}/></IonItem>
          <IonItem lines="none"><IonLabel position="stacked">Nota</IonLabel><IonTextarea value={note} onIonInput={(e) => setNote(e.detail.value ?? '')}/></IonItem>
          <IonButton expand="block" className="ion-margin-top" onClick={save}>Guardar movimiento</IonButton>
          <p className="login-note">El sistema valida que la categoría no esté vacía y que el valor sea mayor que cero.</p>
        </section>
        <IonToast isOpen={Boolean(message)} message={message} duration={2600} color="danger" onDidDismiss={() => setMessage('')} />
      </IonContent>
    </IonPage>
  );
}
