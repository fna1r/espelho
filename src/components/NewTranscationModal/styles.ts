import styled from 'styled-components'
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        // selecionadno todo input que tiver um placeholder
        &::placeholder {
            color: var(--text-body);
        }

        // todo input que tiver um input antes dele será aplicado o margin-top
        & + input { 
            margin-top: 1rem;
        }
    }
    
    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: 0.5;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer =styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

// criando a interface para mudar o background do button de entra e saida
interface RadioBoxProps {
    isActive: boolean;
    activerColor: 'green' | 'red'
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive 
            ? transparentize( 0.9, colors[props.activerColor]) 
            : 'transparent'
        };
        
        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.3, '#d7d7d7')}; // função para escurecer a cor
        }

        img {
            width: 20px;
            height: 20px;
        }
        span {
            display: block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`