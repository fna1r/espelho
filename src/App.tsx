import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTranscationModal";
import { TrasactionsProvider } from "./hooks/useTransactions";
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
    <TrasactionsProvider> 
      <Header onOpenNewTransactionModal={handelOpenNewTransactionModal} /> 
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TrasactionsProvider> 

  );
}

