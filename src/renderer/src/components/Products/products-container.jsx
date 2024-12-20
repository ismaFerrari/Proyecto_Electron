import { ContainerProductosStyled } from './productsContainer-styled'
import ProductosLista from './productosLista'

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
