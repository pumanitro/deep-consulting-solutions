import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    height: 40px;
    background-color: ${(props) => props.theme.colors.main.primary};
    color: ${(props) => props.theme.colors.utils.text.light};
    border: none;
`;
