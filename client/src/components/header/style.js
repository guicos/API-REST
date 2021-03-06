import styled from 'styled-components';

export const IndexHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-family: sans-serif;
    background: white;
    padding: 15px;
    border-bottom: 1px solid #dcdcdc;

    h1{
        font-family: 'Lobster', cursive;
        color: #f66301;
        margin: 0;
        font-size: 35pt
    }

    nav{
        display: flex;
        justify-content: space-evenly;
        a{
            margin: 10px;
            text-decoration: none;
            font-size: 16pt;
            color: #545454;
        }
    }
`;