import iconeImgEntrada from '../../assets/Entradas.svg';
import iconeImgSaida from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from "./styles";

export function Summary(){

    const { transactions } = useTransactions()

   // const totalDeposits = transactions.reduce((acc, transaction) => {
   //     if(transaction.type === 'deposit') {
    //        return acc + transaction.amount
    //    }
    //    return acc
   // }, 0)




    return (
        <Container>

        </Container>
    )
}