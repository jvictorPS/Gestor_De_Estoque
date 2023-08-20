import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerCabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 100px;
    width: 100%;

    div {
        font-weight: 600;
        font-size: 20px
    }
`

export const StyledLink = styled(Link)`
        margin-left: 2.5rem;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.87);
        font-size: 18px
`
