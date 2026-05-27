import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
