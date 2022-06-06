import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewAppointmentModal";
import { AppointmentsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handelOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handelCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  
  return (
    <AppointmentsProvider> 
      <Header onOpenNewTransactionModal={handelOpenNewTransactionModal} /> 
      

      <GlobalStyle />
    </AppointmentsProvider> 

  );
}

