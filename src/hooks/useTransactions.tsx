import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';


interface Transaction {
    id: number;
    name: string;
    type: string;
    category: string;
    createdAt: string;
    hour: string;
    dataa: string;
} 

// dados que o usuario digitar
// pegando o que tem na interface Transaction e utilizando na TransacitonInput. sem o id e o createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TrasactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData{
    transactions: Transaction[],
    createTransaction: (transaction : TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>(
        {} as TransactionContextData
    )

export function TrasactionsProvider({children}: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
       api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput : TransactionInput){ 
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}