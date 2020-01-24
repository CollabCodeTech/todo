import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: "checkbox"})`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 300;
  padding: 30px 20px;
  margin-bottom: 30px;
  
  background-image: linear-gradient(270.67deg, rgba(255, 255, 255, 0) 0.13%, rgba(160, 163, 164, 0.483621) 18.84%, rgba(123, 127, 128, 0.671695) 39.1%, rgba(81, 86, 88, 0.885417) 75.46%, #3A4042 99.88%);

  &:before {
    content: "";
    box-sizing: content-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--color-first);
    margin-right: 15px;
    cursor: pointer;
  }

  ${Checkbox}:checked + &:before {
    background-color: var(--color-first);
  }
`;



export { Label, Checkbox }