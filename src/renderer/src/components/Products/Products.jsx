import { PiPlaceholderDuotone } from 'react-icons/pi'
import { products } from '../../data/products'
import { ProductsListDiv, ProductsSection } from './productosLista-styled'

export const Products = () => {
  return (
    <>
      {products.map((product) => (
        <ProductsSection key={product.id}>
          <ProductsListDiv>
            <PiPlaceholderDuotone size={'100px'} />
            <ProductsListDiv column>
              <h3>{product.name}</h3>
              <p>{product.id}</p>
              <p>{product.price}</p>
            </ProductsListDiv>
          </ProductsListDiv>

          <ProductsListDiv>
            <p>{product.cantidad}</p>
            <p>Fecha de Agregado</p>
            <button>ELIMINAR</button>
          </ProductsListDiv>
        </ProductsSection>
      ))}
    </>
  )
}
