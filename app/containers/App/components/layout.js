import React from 'react';
import styled from 'styled-components';

import menuWidth from '../../main-menu/width'

const ContantContainer = styled.div`
    margin-left: ${menuWidth};
    width: calc(100% - ${menuWidth});
`;

export default ({ children }) => (
    <div>
        <ContantContainer>
            {children}
        </ContantContainer>
    </div>
);
