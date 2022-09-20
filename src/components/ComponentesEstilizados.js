import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados() {
    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    
    const setTransitionTime = (time) => `all ${time} ease-in-out`;


    /* Para hacer las animaciones */
    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;


    /* Efectos de los h3 */
    const MyH3 = styled.h3`
        padding:2rem;
        text-align:center;
        background-color: ${mainColor};
        transition: ${setTransitionTime("1s")};

        /* Propiedad color */
        color: ${(props) => props.color};
        /* En caso de no aplicar la propiedad color, pon un negro */
        color: ${({color}) => color || "#000"};

        /* Hacerlo botón */
        ${({isButton}) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `}

        /* Animaciones */
        animation: ${fadeIn} 4s ease-out;

        /* Desenfocar el fondo */
        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;
        
    
    /* Diferentes temas light/dark */
    const light = {
        color: "#222",
        bgColor: "#DDD",
    };
    /* Diferentes temas light/dark */
    const dark = {
        color: "#DDD",
        bgColor: "#222",
    };
    /* Diferentes temas light/dark */
    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme})=>theme.color};
        background-color: ${({theme})=>theme.bgColor};
    `;
    /* Redonde de las cajas */
    const BoxRounded = styled(Box)`
        border-radius: 2rem;
    `;


    /* Componente global para todos */
    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        }
    `;


    return(
        <>
            {/* Para cambiar todos los h2 de la app */}
            <GlobalStyle></GlobalStyle>

            <h2>Styled-Components</h2>
            {/* Uso general de styled component */}
            <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
            {/* Uso general de styled component cambiando el color */}
            <MyH3 color="#61dafb">Hola soy otro h3 estilizado con styled-components</MyH3>
            {/* Uso general de styled component con botón */}
            <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
            {/* Uso general de styled component para cambiar el tema */}
            <ThemeProvider theme={light}>
                <Box>Soy una caja light</Box>
            </ThemeProvider>
            {/* Uso general de styled component para cambiar el tema y redondearlo */}
            <ThemeProvider theme={light}>
                <BoxRounded>Soy una caja redondeada light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <BoxRounded>Soy una caja redondeada dark</BoxRounded>
            </ThemeProvider>
        </>
    );
}