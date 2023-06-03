import styled from 'styled-components';

const StyledIcon = styled.svg`
  position: absolute;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  left: 85%;
  top: 10px;
  display: block;
  fill: none;
  color: ${(props: { paint: string }) => props.paint};
  width: 43px;
  height: 42px;
  &:hover {
    color: orange;
    cursor: pointer;
  }

  &:active {
    color: transparent;
    cursor: pointer;
  }
`;

export default StyledIcon;
