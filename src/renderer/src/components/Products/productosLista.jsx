import { ProductosListaStyled } from "./productosLista-styled-components";

const ProductosLista = () => {
    return (
        <ProductosListaStyled>
            <ul>
                <li>Producto</li>
                <li>Cantidad</li>
                <li>ID</li>
                <li>Precio</li>
                <li>Fecha de Agregado</li>
                <li>Opciones</li>
            </ul>
        </ProductosListaStyled>
    );
}

export default ProductosLista;