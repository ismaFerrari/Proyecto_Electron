
import { ContainerProductosStyled } from "./products-styled-components"
import ProductosLista from "./productosLista"

const ContainerProductos = () => {
    return (
        <>
            <ContainerProductosStyled>
                <h3>Tus Productos</h3>
            </ContainerProductosStyled>
            <ProductosLista />
        </>
    )
}

export default ContainerProductos