import { ProductsTable } from './ProductsTable/ProductsTable'
import { ContainerProductosStyled } from './productsContainer-styled'

export const ProductsContainer = () => {
  return (
    <ContainerProductosStyled>
      <h3>Tus Productos</h3>
      <ProductsTable />
    </ContainerProductosStyled>
  )
}
