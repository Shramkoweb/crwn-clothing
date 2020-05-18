import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  position: relative;
  width: 45px;
  user-select: none;
  background: none;
  border: none;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  height: 24px;
  width: 24px;
`;

export const ItemCountContainer = styled.span`
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: 58%;
  transform: translateY(-50%);
`;
