import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header"
   
    "content";

    > main {
        grid-area: content;
        max-width: 1115px;
        margin: 50px auto;
        overflow-y: auto;
    }

    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-track {
    background-color: transparent; /* Cor de fundo da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK}; /* Cor da barra de rolagem */
    }

    
`

export const Hmain = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        font-weight: 400;
        font-size: 32px;
    }
`

export const NewMovie = styled.button`
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BG_800};
    display: flex;
    text-align: center;
    align-items: center;
    gap: 8px;

    border-radius: 8px;
    padding: 14px 32px;


    svg {
        color: ${({theme}) => theme.COLORS.BG_800};
    }
`

export const Content = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
`