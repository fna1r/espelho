import {useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles'



export function TrasactionsTable() {
    const { transactions } = useTransactions()

    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Horas</th>
                        <th>Data</th> 
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.name}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.hour}</td>
                                <td>{transaction.dataa}
                                </td>
                            </tr>
                        ) 
                    })}

                </tbody>
            </table>
        </Container>
    )
}