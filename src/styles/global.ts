import {createGlobalStyle} from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:'Roboto', 'sans-serif';
    }

    body{
        color: ${theme.colors.white};

        height: 100vh;
        width: 100vw;
    }
`