import styled from 'styled-components'

export const ProductosNavStyled = styled.div`
  display: flex;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    list-style: none;
    gap: 20px;
    background-color: #666;
  }
`

export const ProductsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: snow;
`

export const ProductsListDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  gap: ${(props) => props.gap || '0px'};
`
