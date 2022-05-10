import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import closeImg from '../../assets/Vector.svg';



import { Container} from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()


    // sempre inicializa um estado no formato que ele irá receber os valores
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    const [hour, setHour] = useState('')
    const [data, setData] = useState('')
    const [type, setSytpe] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault() // para não recarregar a pagina após a entrada de dados

        await createTransaction({
            name,
            category,
            type,
            hour,
            data
        })

        setName('')
        setCategory('')
        setHour('')
        setData('')
        setSytpe('deposit')
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Novo Agendamento</h2>

                <input
                    placeholder='Nome'
                    value={name}
                    required
                    onChange={event => setName(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />

                <input
                    placeholder='Categoria'
                    value={category}
                    required
                    onChange={event => setCategory(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />

                <input
                    type='time'
                    value={hour}
                    required
                    onChange={event => setHour(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />

                <input
                    type='date'
                    value={data}
                    required pattern="[0-9]{4}-[0-9]"
                    onChange={event => setData(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />



                <button type='submit'>
                    Agendar
                </button>
            </Container>


        </Modal>
    )
}