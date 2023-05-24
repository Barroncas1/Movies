import styled from 'styled-components'

export const Container = styled.div`

    main {
        max-width: 1115px;
        margin: 40px auto;

        display: flex;
        flex-direction: column;
        gap: 40px;

        .inputs{
            display: flex;
            gap: 40px;
        }

        h2 {
            font-size: 20px;
            font-weight: 400;
            color:  ${({theme}) => theme.COLORS.C_I};
        }

        .tags {
            display: flex;
            padding: 16px;
            gap: 24px;
            border-radius: 8px;
            background-color: ${({theme}) => theme.COLORS.BG_900};
        }
    }
`