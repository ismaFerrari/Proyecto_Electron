import { PiPlaceholderDuotone } from 'react-icons/pi'
import { products } from '../../data/products'
import { ProductsListDiv, ProductsSection } from './productosLista-styled'

export const ProductItem = ({ product }) => {
  const { id, name, cantidad, price } = product
  return (
    <ProductsSection key={id}>
      <ProductsListDiv>
        <PiPlaceholderDuotone size={'100px'} />
        <ProductsListDiv column>
          <h3>{name}</h3>
          <p>SKU: {id}</p>
        </ProductsListDiv>
      </ProductsListDiv>

      <ProductsListDiv gap="60px">
        <p>{cantidad}</p>
        <p>{id}</p>
        <p>${price}</p>
        <p>Fecha de Agregado</p>
        <button>ELIMINAR</button>
      </ProductsListDiv>
    </ProductsSection>
  )
}

export const Products = () => {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  )
}
