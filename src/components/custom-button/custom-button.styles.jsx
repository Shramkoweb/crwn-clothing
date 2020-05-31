import styled, {css} from 'styled-components';


const defaultStyles = css`
  background-color: black;
  color: white;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  const {isGoogleSignIn, inverted} = props;

  if (isGoogleSignIn) {
    return googleStyles;
  }

  return inverted ? invertedStyles : defaultStyles;
};


export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  min-height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', serif;
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.25s ease;
  
  ${getButtonStyles}
`;
