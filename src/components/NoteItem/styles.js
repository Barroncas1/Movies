import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent": theme.COLORS.BG_INPUT};

    color: ${({theme}) => theme.COLORS.LETTER};

    border: ${({theme, isNew}) => isNew ? `3px dashed ${theme.COLORS.C_I}` : "none"};

    
    border-radius: 10px;
    padding: 16px;

    > button {
        border: none;
        background: none;
    } 

    .button-delete{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input {
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.C_I}
        }
    }

    
`