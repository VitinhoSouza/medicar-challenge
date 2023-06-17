import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        colors:{
            black: string,

            primary: string      
            primary_hover: string,
            secondary_hover: string,
      
            gray2: string,
            gray1: string,
            white: string,
        }
    }
}