import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.LETTER};

    font-weight: 500;
    border: none;
    padding: 18px;
    border-radius: 10px;
    align-items: center;

    &:disabled {
        background-color: ${({theme}) => theme.COLORS.BG_900};
        color: ${({theme}) => theme.COLORS.PINK};;
    }

`