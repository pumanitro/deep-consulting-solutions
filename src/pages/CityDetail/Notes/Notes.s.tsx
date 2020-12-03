import styled from "styled-components";
import {Button} from "../../../components/Button/Button";

export const StyledTextArea = styled.textarea`
    line-height: 34px;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.colors.main.primary};
    }
`;

export const StyledSaveButton = styled(Button)`
    margin-right: 12px;
`;
