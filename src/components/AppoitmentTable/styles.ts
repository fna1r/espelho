import styled from 'styled-components'

export const Container = styled.div`

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        text-align: center;

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem; 

            // Quando for o primeiro td mudar a cor dele
            &:first-child{
                color: var(--text-title);
            }

            
        }
    }
`
export const Td = styled.td`
    cursor: pointer;
    

    :hover{
        filter:brightness(0.9);
    }
`
