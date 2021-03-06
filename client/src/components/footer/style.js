import styled from 'styled-components';

export const IndexFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-family: sans-serif;
    background:#f66301;
    padding: 15px;
    color: white;
    border-radius: 200px 0px 0px 0px;

    div{
        text-align: center;
    }

    h2{
        font-family: 'Lobster', cursive;
        margin: 0;
        font-size: 35pt
    }
    nav{
        display: flex;
        flex-direction: column;
        p{
            font-size: 30pt;
            font-weight: bold;
            margin: 20px 0px 20px 8px;
        }
        a{
            margin: 10px;
            text-decoration: none;
            font-size: 16pt;
            display: flex;
            color: white;
            align-items: center;
            img{
                width: 30px;
                margin-right: 8px;
            }
        }
    }
`;