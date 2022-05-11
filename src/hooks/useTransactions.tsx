import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';
import moment from 'moment';


interface Appointment {
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
type AppointmentInput = Omit<Appointment, 'id' | 'createdAt'>

interface AppointmentsProviderProps {
    children: ReactNode;
}

interface AppointmentContextData{
    appointements: Appointment[],
    appointmentSelected?: Appointment,
    createAppointment: (appointement : AppointmentInput) => Promise<void>
    deleteAppointment: (id: number) => Promise<void>
}

const AppointmentsContext = createContext<AppointmentContextData>({} as AppointmentContextData)

export function AppointmentsProvider({children}: AppointmentsProviderProps) {
    const [appointements, setAppointements] = useState<Appointment[]>([])

    useEffect(() => {
       api.get('transactions')
            .then(response => {
                setAppointements( response.data.map((element: any) => {
                    return{
                        ...element,
                        data: moment(element.data).format('DD/MM/YYYY')
                    }
                   
                }))
        } )
    }, []);

    async function createAppointment(appointmentInput : AppointmentInput){
        const response = await api.post('/transactions', {
            ...appointmentInput,
            data: moment(appointmentInput.data).format('DD/MM/YYYY'),
            createdAt: new Date()
        })
        const newAppoitment  = response.data

        setAppointements([
            ...appointements,
            newAppoitment
        ])
    };


    async function deleteAppointment(id : number){
        await api.delete(`/transactions/${id}`)
        const {data} = await api.get('/transactions')  
        setAppointements(data)
    }

    return (
        <AppointmentsContext.Provider value={{appointements, createAppointment, deleteAppointment}}>
            {children}
        </AppointmentsContext.Provider>
    )
}

export function useAppointments(){
    const context = useContext(AppointmentsContext)

    return context
}