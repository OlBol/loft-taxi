import React from 'react';
import styled from 'styled-components';

const Heading = ({ title }) => <H2>{title}</H2>;

export default Heading;

const H2 = styled.h2`
    margin: 0 0 30px;
    color: #323232;
    font-size: 36px;
    font-weight: 700;
`;
