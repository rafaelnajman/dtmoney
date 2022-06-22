import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from "./components/NewTransanctionModal";
import { TransactionsProvider, TransactionsContext } from '../src/hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setNewTransactionModalOpen(false)
  }

  return (
      <TransactionsProvider>

        <GlobalStyle />

        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}></Header>

        <Dashboard />

        <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
      
      </TransactionsProvider>

   
  );
}
