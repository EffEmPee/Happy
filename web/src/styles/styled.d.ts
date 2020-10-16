import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    landing: string;

    colors: {
      primary: string;
      secundary: string;
      button: string;
      shapes:string;
      shapes2: string;
      buttonHover: string;
      text: string;
      textSecundary: string;
      
      secundaryBack: string;
      background: string;
    };
  }
}