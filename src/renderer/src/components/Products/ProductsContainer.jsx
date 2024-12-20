import { ProductosLista } from './productosLista'
import { Products } from './Products'
import { ContainerProductosStyled } from './productsContainer-styled'

export const ProductsContainer = () => {
  return (
    <ContainerProductosStyled>
      <h3>Tus Productos</h3>
      <ProductosLista />
      <Products />
    </ContainerProductosStyled>
  )
}
