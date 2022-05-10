import { useCallback} from 'react'

import {useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles'

// Icons
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
interface Transaction {
    id: number;
    name: string;
    type: string;
    category: string;
    createdAt: string;
    hour: string;
    data: string;
} 


export function TrasactionsTable() {
    const { transactions, deleteTransaction, updateTransaction } = useTransactions()

    const handleDeleteAppointment = useCallback(async (id: number) => {
        await deleteTransaction(id);
    },[])

    const handleEditAppointment = useCallback(async (transaction: Transaction) => {
        await updateTransaction(transaction);
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Serviço</th>
                        <th>Data</th> 
                        <th>Horário</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.name}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.data}</td>
                                <td>{transaction.hour}</td>
                                <td onClick={() => handleEditAppointment(transaction)}><i><RiPencilLine /></i></td>
                                <td onClick={() => handleDeleteAppointment(transaction.id)}><i><RiDeleteBin6Line/></i></td>
                            </tr>
                        ) 
                    })}

                </tbody>
            </table>
        </Container>
    )
}