import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.button`
    align-self: flex-end;
    padding: 15px 50px;
    font-size: 21px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background-color: #ffc617;
`;

const Submit = ({ name }) => <StyledSubmit type="submit">{name}</StyledSubmit>;

export default Submit;
