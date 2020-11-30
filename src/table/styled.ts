import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }

  .triangle.up {
    transform: rotate(180deg);
  }
  .triangle {
    position: relative;
    display: 50%;
    left: auto;
    width: 1em;
    height: 1em;
  }
`;

export const StyledTHead = styled.thead`
  font-size: 2rem;
`;

export const StyledTh = styled.th`
  font-size: 1.6rem;
  color: gray;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Highlight = styled.span`
  background-color: yellow;
`;

export const Input = styled.input`
  height: 30px;
  font-size: 15px;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 30px;
  cursor: pointer;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
    max-width: 50vw;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  .left-icon {
    position: absolute;
    display: flex;
    left: 9px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;

export const StyledSelect = styled.div`
  display: flex;
  height: 30px;
`;
