import { Container, Content } from './styles'

// Images
import logo from '../../assets/espelho.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

// no header é pra colocar aquilo que vai se repetir em todas as paginas
export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Espelho Meu" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                        Agendarrr
                </button>
            </Content>
        </Container>
    )
}   