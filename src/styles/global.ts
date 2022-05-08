import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =  createGlobalStyle`
    // variaveis
    :root{
        --background: #f0f2f5;
        --shape: #FFFFFF;

        --red: #E52E40;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5f;
        --text-body: #969CB3;

    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

       // font-size é o tamanho ideal para desktop 
html {
    
    // configurando para alterar o tamanho da fonte, conforme o tamanho da tela
    @media (max-width: 1080px){
        font-size: 93.75% ; // 15px
        // 1rem = 15px
    }

    @media (max-width: 720px){
        font-size: 87.5% ; // 14px
        // 1rem = 14px
    }
}

// REM = 1 rem = font-size ex:
// 1rem = 16px

    body{
        background: var(--background); 
        -webkit-font-smoothing: antialiased;
    }

    // definindo o tipo da fonte
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }


    // para tudo que tiver desabilitado
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed ;
    }

    // estilizando o modal

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        // para fazer o modal ocpuar a tela inteira
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;      
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transform: 0.3s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`
