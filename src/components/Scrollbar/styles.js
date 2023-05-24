import styled from 'styled-components'

export const Container = styled.div`
    
    width: 300px;
    height: 200px;
    overflow: auto;
    position: relative;

    .content {
    width: 100%;
    height: 100%;
    padding-right: 20px; /* Ajuste o valor para deixar espaço para a barra de rolagem */
    box-sizing: border-box;
    }

    /* Estilizando a barra de rolagem */
    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Cor de fundo da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor da barra de rolagem ao passar o mouse */
    }

`