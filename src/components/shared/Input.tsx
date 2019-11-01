import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-bottom: 40px;
    width: 100%;
    padding: 8px 0;
    font-size: 16px;
    border: 0;
    border-bottom: 2px solid #eaeaea;
    transition: border-color 0.4s;

    &:hover {
        border-color: #1473e6;
    }

    &:focus {
        outline: none;
        border-color: #1473e6;
    }
`;

const Input = ({ type, id, placeholder }: { type: string; id: string; placeholder: string }) => (
    <StyledInput type={type} id={id} placeholder={placeholder} />
);

export default Input;
