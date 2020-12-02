import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
    margin: 20px 0;
`;

export const StyledInput = styled.input`
  height: 34px;  
  
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.main.primary};
  }
`;
