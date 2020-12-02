import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
    margin: 20px 0;
`;

export const StyledInput = styled.input`
  height: 34px;  
  padding: 0 8px;
  
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.main.primary};
  }
`;

export const CenteredSpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ResultBox = styled.div`
    padding: 20px;
    background-color: ${(props) => props.theme.colors.utils.background.mid};
    display: flex;
    justify-content: space-between;
`;
