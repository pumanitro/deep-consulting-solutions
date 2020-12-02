import styled from 'styled-components';

export const CenteredApps = styled.div`
    // I would add polifil for vh values if we would need to support old types of browsers but I want it to be here for app to be easy centered
    min-height: 100vh;
    display: flex;
    align-items: center;   
    justify-content: center;
    flex-direction: column;
    margin: 20px 0;
`;
