import { createGlobalStyle } from "styled-components";
import { Theme } from "./hooks/contextTheme/interface";

export default createGlobalStyle<Theme>`
:root {
   
    --color-background-dark: #f2f2f2;
    --color-background-ligth: #181818;

    --color-box-dark: #e0e0e0;
    --color-box-ligth: #2b2b2b ;

    --color-border-ligth: #949494;
    --color-border-dark: #4a4a4a;
    
   
    --color-text-dark: #48484A;
    --color-text-ligth: #F1F1F1;

    --font-weight-bold: 700;
    --font-weight-medium: 600;
    --font-weight-regular: 400;

    --font-size-title: 32px;
    --font-size-medium: 20px;
    --font-size-regular: 16px;
    
}


body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    background-color: var(--color-background-${(Theme) => Theme.color});
    color: var(--color-text-${(Theme) => Theme.color})
}
`;
