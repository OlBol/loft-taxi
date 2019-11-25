import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

interface Pages {
    id: number;
    name: string;
    route: string;
}

export const pages: Pages[] = [
    { id: 0, name: 'Карта', route: 'map' },
    { id: 1, name: 'Профиль', route: 'profile' },
    { id: 2, name: 'Выйти', route: 'logOut' },
];

const Header = ({ onChangePage }: { onChangePage: (route: string) => void }) => {
    return (
        <Wrapper data-testid="header">
            <Container>
                <Logo colored="black" />
                <nav>
                    <List>
                        {pages.map(({ id, name, route }) => (
                            <Item key={id}>
                                <Button
                                    onClick={() => onChangePage(route)}
                                    data-testid={`${route}-btn`}
                                >
                                    {name}
                                </Button>
                            </Item>
                        ))}
                    </List>
                </nav>
            </Container>
        </Wrapper>
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
