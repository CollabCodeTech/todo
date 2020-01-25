import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: "checkbox"})`
  display: none;
`;

const Icon = styled.img`
  opacity: 0;
  margin-left: 10px;
  transition: opacity 200ms linear, transform 200ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;

const Content = styled.span`
  &[contenteditable="true"] {
    border: 2px dotted var(--color-first);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 300;
  padding: 30px 20px;
  margin-bottom: 30px;
  cursor: pointer;
  
  background-image: linear-gradient(270.67deg, rgba(255, 255, 255, 0.15) 0.13%, rgba(160, 163, 164, 0.483621) 11.56%, rgba(123, 127, 128, 0.671695) 26.63%, rgba(81, 86, 88, 0.885417) 75.46%, #3A4042 99.88%);

  &:before {
    content: "";
    box-sizing: content-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--color-first);
    margin-right: 15px;

    transition: background-color 200ms linear;
  }

  ${Checkbox}:checked + &:before {
    background-color: var(--color-first);
  }

  &:hover > ${Icon} {
    opacity: 1;
  }
`;

export { Label, Checkbox, Icon, Content }