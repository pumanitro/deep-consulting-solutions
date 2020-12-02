import React, {FC} from 'react';
import styled from 'styled-components';

type CityListPropTypes = {
    cities: React.ReactElement[],
}

const ListElement = styled.div<{isEven : boolean}>`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: ${(props) => props.isEven ? props.theme.colors.utils.background.dark : props.theme.colors.utils.background.mid};
    // I would add polifil for vh or vw values if we would need to support old types of browsers
    width: 33vw;
`;

export const CityList: FC<CityListPropTypes> = ({cities}) => {
    return <>
        {
            cities.map((city: React.ReactElement, index: number) => <ListElement isEven={index % 2 !== 0}>
                {city}
            </ListElement>)
        }
    </>
}
