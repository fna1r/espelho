import { useCallback} from 'react'

import {useAppointments } from '../../hooks/useTransactions';
import { Container, Td } from './styles'

// Icons
import { RiDeleteBin6Line } from "react-icons/ri";


export function TrasactionsTable() {
    const { appointements, deleteAppointment } = useAppointments()

    const handleDeleteAppointment = useCallback(async (id: number) => {
        await deleteAppointment(id);
    },[])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Serviço</th>
                        <th>Data</th> 
                        <th>Horário</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {appointements.map(appointement => {
                        return (
                            <tr key={appointement.id}>
                                <td>{appointement.name}</td>
                                <td>{appointement.category}</td>
                                <td>{appointement.data}</td>
                                <td>{appointement.hour}</td>
                                <Td onClick={() => handleDeleteAppointment(appointement.id)}><i><RiDeleteBin6Line/></i></Td>
                            </tr>
                        ) 
                    })}

                </tbody>
            </table>
        </Container>
    )
}