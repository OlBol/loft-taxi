import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/black-logo.svg';
import logoWhite from '../../assets/images/white-logo.svg';

const Logo = ({ colored }: { colored: string }) => {
    return colored === 'white' ? (
        <LogoImg src={logoWhite} alt="Логотип компании" />
    ) : (
        <LogoImg src={logo} alt="Логотип компании" />
    );
};

export default Logo;

const LogoImg = styled.img`
    width: 154px;
    height: 37px;
`;
