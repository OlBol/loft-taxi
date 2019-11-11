import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Input from '../Input';
import Button from '../Button';

const LogIn = ({
    onSubmitForm,
    onChangeToSignUp,
}: {
    onSubmitForm: (e: React.SyntheticEvent) => void;
    onChangeToSignUp: () => void;
}) => {
    return (
        <FormContainer data-testid="login-container">
            <Heading title="Войти" />
            <Text>
                Новый пользователь?&nbsp;
                <StyledButton onClick={onChangeToSignUp} data-testid="onChangeToSignUp">
                    Зарегистрируйтесь
                </StyledButton>
            </Text>
            <Form onSubmit={onSubmitForm}>
                <Label htmlFor="username">Имя пользователя*</Label>
                <Input type="text" id="username" placeholder="Введите имя" />
                <Label htmlFor="password">Пароль*</Label>
                <Input type="password" id="password" placeholder="Введите пароль" />
                <Button name="Войти" />
            </Form>
        </FormContainer>
    );
};

export default LogIn;

const FormContainer = styled.div`
    margin-left: 200px;
    width: 500px;
    padding: 60px 50px;
    background-color: #fff;

    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

const Text = styled.div`
    margin-bottom: 40px;
`;

const StyledButton = styled.button`
    color: #1473e6;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
`;

const Label = styled.label`
    margin-bottom: 8px;
    display: block;
    color: #747474;
    font-size: 15px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
