import React from 'react';
import styled from 'styled-components';

const Button = ({ name }: { name: string }) => <StyledButton type="submit">{name}</StyledButton>;

export default Button;

const StyledButton = styled.button`
    align-self: flex-end;
    padding: 15px 50px;
    font-size: 21px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background-color: #ffc617;
`;
