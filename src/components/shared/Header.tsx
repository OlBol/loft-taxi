import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Header = ({ page, setPage }: { page: any; setPage: any }) => {
    const onClick = (link: string) => {
        return () => setPage(link);
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <Logo colored="black" />
                    <nav>
                        <List>
                            <Item>
                                <Button onClick={onClick('map')} colored={page === 'map'}>
                                    Карта
                                </Button>
                            </Item>
                            <Item>
                                <Button onClick={onClick('profile')} colored={page === 'profile'}>
                                    Профиль
                                </Button>
                            </Item>
                            <Item>
                                <Button onClick={onClick('login')} colored={false}>
                                    Выйти
                                </Button>
                            </Item>
                        </List>
                    </nav>
                </Container>
            </Wrapper>
        </>
    );
};

export default Header;

const Wrapper = styled.header`
    padding: 27px 25px 20px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.11);
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px 20px;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    background-color: ${({ colored }: { colored: boolean }) =>
        colored ? '#f2f2f2' : 'transparent'};
    border-radius: 2px;
`;

const Item = styled.li`
    padding-left: 5px;
    list-style-type: none;
`;

const List = styled.ul`
    margin: 0;
    display: flex;
    list-style-type: none;
`;
