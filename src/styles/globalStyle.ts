import { pxToRem } from '@/utils'
import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Inter", sans-serif;
        padding: 0;
        margin: 0;
    }
    figure, h1, h2, p, ul, li {
        padding: 0;
        margin: 0;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }
    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }
`
