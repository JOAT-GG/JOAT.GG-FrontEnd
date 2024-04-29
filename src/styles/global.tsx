"use client";

import { Global, css } from "@emotion/react";

const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background: #242526;
        max-width: 1080px;
        margin: 0 auto;
    }
`;

const GlobalStyle = () => {
    return <Global styles={globalStyle} />;
};

export default GlobalStyle;
