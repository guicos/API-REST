import styled from 'styled-components';

export const Produtos = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 90vh;

    div{
        text-align: center;
    }

    p:nth-child(1){
        font-size: 15pt;
        font-weight: bold;
        color: #2b2b2b;
    }
`;