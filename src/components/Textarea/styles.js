import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({theme}) => theme.COLORS.BG_INPUT};
    color:  ${({theme}) => theme.COLORS.C_I};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &:placeholder {
        color:  ${({theme}) => theme.COLORS.C_I};
    }

`