import styled, {css} from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';
const fontSize = '18px';

const shrinkLabelStyles = css`
  top: -${fontSize};
  font-size: ${fontSize};
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: white none;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: ${fontSize};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    line-height: 1;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
