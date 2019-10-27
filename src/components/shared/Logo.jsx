import React from 'react';
import styles from 'styled-components';
import logo from '../../assets/images/logo.png';

const LogoImg = styles.img`
    width: 154px;
    height: 37px;
`;

const Logo = () => {
    return (
        <>
            <LogoImg src={logo} alt="Логотип компании" />
        </>
    );
};

export default Logo;
