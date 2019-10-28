import React from 'react';
import styles from 'styled-components';
import Logo from './Logo';

const Wrapper = styles.header`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styles.button`
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
`;

const Item = styles.li`
    padding-left: 35px;
    list-style-type: none;
`;

const List = styles.ul`
    display: flex;
    list-style-type: none;
`;

const Header = ({ setPage }) => {
    const onClick = link => {
        return () => setPage(link);
    };

    return (
        <>
            <div className="container">
                <Wrapper>
                    <Logo />
                    <nav>
                        <List>
                            <Item>
                                <Button onClick={onClick('map')}>Карта</Button>
                            </Item>
                            <Item>
                                <Button onClick={onClick('profile')}>Профиль</Button>
                            </Item>
                            <Item>
                                <Button onClick={onClick('login')}>Выйти</Button>
                            </Item>
                        </List>
                    </nav>
                </Wrapper>
            </div>
        </>
    );
};

export default Header;
