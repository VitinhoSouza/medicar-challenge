import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:'Roboto', 'sans-serif';
    }

    body{
        color: ${props => props.theme.colors.white};

        height: 100vh;
        width: 100%;
    }
`