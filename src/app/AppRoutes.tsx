import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from '../presentation/pages/LoginPage';
import DashboardPage from '../presentation/pages/DashboardPage';
import TransactionsPage from '../presentation/pages/TransactionsPage';
import AddTransactionPage from '../presentation/pages/AddTransactionPage';
import GoalsPage from '../presentation/pages/GoalsPage';
import AlertsPage from '../presentation/pages/AlertsPage';
import SettingsPage from '../presentation/pages/SettingsPage';

export default function AppRoutes() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/transactions" component={TransactionsPage} />
        <Route exact path="/transactions/new" component={AddTransactionPage} />
        <Route exact path="/goals" component={GoalsPage} />
        <Route exact path="/alerts" component={AlertsPage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
