import React from 'react';
import styles from 'styled-components';

const H2 = styles.h2`
    margin: 0 0 30px;
    color: #323232;
    font-size: 36px;
    font-weight: 700;
`;

const Heading = ({ title }) => {
    return (
        <>
            <H2>{title}</H2>
        </>
    );
};

export default Heading;
