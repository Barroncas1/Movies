import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    border: none;
    font-size: 16px;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.PINK};

    svg {
        ${({theme}) => theme.COLORS.PINK};
    }

`