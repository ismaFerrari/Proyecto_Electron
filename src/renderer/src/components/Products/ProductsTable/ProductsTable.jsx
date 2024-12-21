import React from 'react'
import { products } from '../../../data/products'
import { Table, TableHeader, TableRow, TableCell } from './productsTable-styled'
import { PiPlaceholderDuotone } from 'react-icons/pi'

export const ProductsTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Imagen y Descripcion</TableHeader>
          <TableHeader>Cantidad</TableHeader>
          <TableHeader>ID</TableHeader>
          <TableHeader>Precio</TableHeader>
          <TableHeader>Fecha de Agregado</TableHeader>
          <TableHeader>Opciones</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}
              >
                <PiPlaceholderDuotone size={'50px'} style={{ marginRight: '10px' }} />
                <div>
                  <h3>{product.name}</h3>
                  <p>SKU: {product.id}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>{product.cantidad}</TableCell>
            <TableCell>{product.id}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>Fecha de Agregado</TableCell>
            <TableCell>
              <button>ELIMINAR</button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}
