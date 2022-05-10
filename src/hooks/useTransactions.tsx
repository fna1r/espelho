import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';
import moment from 'moment';


interface Transaction {
    id: number;
    name: string;
    type: string;
    category: string;
    createdAt: string;
    hour: string;
    data: string;
} 

// dados que o usuario digitar
// pegando o que tem na interface Transaction e utilizando na TransacitonInput. sem o id e o createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TrasactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData{
    transactions: Transaction[],
    transactionSelected?: Transaction,
    createTransaction: (transaction : TransactionInput) => Promise<void>
    updateTransaction: (transaction : Transaction) => Promise<TransactionInput>
    deleteTransaction: (id: number) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TrasactionsProvider({children}: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [transactionSelected, setTransactionSelected] = useState<Transaction>()

    useEffect(() => {
       api.get('transactions')
            .then(response => {
                setTransactions( response.data.map((element: any) => {
                    return{
                        ...element,
                        data: moment(element.data).format('DD/MM/YYYY')
                    }
                   
                }))
        } )
    }, []);

    async function createTransaction(transactionInput : TransactionInput){ 
        const response = await api.post('/transactions', {
            ...transactionInput,
            data: moment(transactionInput.data).format('DD/MM/YYYY'),
            createdAt: new Date()
        })
        const newTransaction  = response.data

        setTransactions([
            ...transactions,
            newTransaction
        ])
    };

    async function updateTransaction(transaction : Transaction) {
        setTransactionSelected(transaction)
        return {
            name: 'Lucas',
            type: 'string',
            category: 'string',
            hour: 'string',
            data: 'string'
        }
        
    }

    async function deleteTransaction(id : number){
        await api.delete(`/transactions/${id}`)
        const {data} = await api.get('/transactions')  
        setTransactions(data)
    }

    return (
        <TransactionsContext.Provider value={{transactions, transactionSelected, createTransaction, updateTransaction, deleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}