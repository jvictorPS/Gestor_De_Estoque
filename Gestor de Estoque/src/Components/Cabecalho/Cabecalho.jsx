import { ContainerCabecalho , StyledLink } from "./style"

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div>
            GESTOR DE ESTOQUE
            </div>
            
            <nav>
                <StyledLink to="">Inicio</StyledLink>
                <StyledLink to="/Estoque">Itens</StyledLink>
            </nav>
        </ContainerCabecalho>
    )
}