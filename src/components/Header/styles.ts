import styled from 'styled-components'

// Criando o css para o Header da pagina. será exportado para o index.tsx

export const Container = styled.header`
    background: #6b196b;
    height: 142px;
`


export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem ;
    display: flex; // para alinha a logo e o button ao centro
    align-items: center; // para alinha a logo e o button ao centro
    justify-content: space-between; // para deixar a logo de um lado e o button de outro necessario o display: flex;

    button {
        font-size: 1rem;
        color: #FFF;
        background: #000;
        border: 0;
        padding: 0 2rem; // 2rem = 32px
        border-radius: 0.25rem; // 0.25rem = 4px
        height: 3rem; // 3rem = 48px
           
        // essa parte é pra quando o mouse passar em cima do button
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9); // para escurecer a cor quando o mouse estiver em cima
        }
    }
`

