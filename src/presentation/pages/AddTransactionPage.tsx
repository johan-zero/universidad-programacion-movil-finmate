import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTextarea, IonToast } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { createTransaction } from '../../domain/usecases/createTransaction';
import { LocalFinanceRepository } from '../../data/repositories/LocalFinanceRepository';
import type { TransactionType } from '../../domain/entities/Transaction';

const repository = new LocalFinanceRepository();

export default function AddTransactionPage() {
  const history = useHistory();
  const [type, setType] = useState<TransactionType>('expense');
  const [category, setCategory] = useState('Alimentación');
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  async function save() {
    try {
      const tx = createTransaction({ type, category, amount, note });
      await repository.saveTransaction(tx);
      history.push('/transactions');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'No fue posible guardar.');
    }
  }

  return (
    <IonPage>
      <AppHeader title="Nuevo movimiento" />
      <IonContent className="ion-padding">
        <IonItem><IonLabel position="stacked">Tipo</IonLabel><IonSelect value={type} onIonChange={(e) => setType(e.detail.value)}><IonSelectOption value="income">Ingreso</IonSelectOption><IonSelectOption value="expense">Gasto</IonSelectOption></IonSelect></IonItem>
        <IonItem><IonLabel position="stacked">Categoría</IonLabel><IonInput value={category} onIonInput={(e) => setCategory(e.detail.value ?? '')}/></IonItem>
        <IonItem><IonLabel position="stacked">Valor</IonLabel><IonInput type="number" value={amount} onIonInput={(e) => setAmount(Number(e.detail.value ?? 0))}/></IonItem>
        <IonItem><IonLabel position="stacked">Nota</IonLabel><IonTextarea value={note} onIonInput={(e) => setNote(e.detail.value ?? '')}/></IonItem>
        <IonButton expand="block" onClick={save}>Guardar</IonButton>
        <IonToast isOpen={Boolean(message)} message={message} duration={2200} onDidDismiss={() => setMessage('')} />
      </IonContent>
    </IonPage>
  );
}
