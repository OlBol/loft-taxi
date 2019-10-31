import React from 'react';
import styles from 'styled-components';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logo-white.svg';

const LogoImg = styles.img`
    width: 154px;
    height: 37px;
`;

const Logo = ({ colored }) => {
    return colored === 'white' ? (
        <LogoImg src={logoWhite} alt="Логотип компании" />
    ) : (
        <LogoImg src={logo} alt="Логотип компании" />
    );
};

export default Logo;