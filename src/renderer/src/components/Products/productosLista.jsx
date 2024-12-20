import { ProductosNavStyled } from './productosLista-styled'

export const ProductosLista = () => {
  return (
    <ProductosNavStyled>
      <ul>
        <li>Producto</li>
        <li>Cantidad</li>
        <li>ID</li>
        <li>Precio</li>
        <li>Fecha de Agregado</li>
        <li>Opciones</li>
      </ul>
    </ProductosNavStyled>
  )
}
