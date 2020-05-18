import styled from 'styled-components';

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 80px;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ItemImage = styled.img`
  height: 80px;
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
`;

export {
  CartItemContainer,
  ItemDetails,
  ItemImage,
};
