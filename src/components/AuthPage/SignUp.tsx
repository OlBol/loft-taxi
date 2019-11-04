import React from 'react';
import styled from 'styled-components';
import Heading from '../shared/Heading';
import Input from '../shared/Input';
import Button from '../shared/Button';

const SignUp = ({
    onSubmitForm,
    onChangeToLogIn,
}: {
    onSubmitForm: (e: React.SyntheticEvent) => void;
    onChangeToLogIn: () => void;
}) => {
    return (
        <FormContainer>
            <Heading title="Войти" />
            <Text>
                Уже зарегистрирован?&nbsp;
                <StyledButton onClick={onChangeToLogIn}>Войти</StyledButton>
            </Text>
            <Form onSubmit={onSubmitForm}>
                <Label htmlFor="newEmail">Адрес электронной почты</Label>
                <Input type="email" id="newEmail" placeholder="Введите адрес" />
                <Label htmlFor="newName">Имя</Label>
                <Input type="text" id="newName" placeholder="Введите имя" />
                <Label htmlFor="newSurname">Фамилия</Label>
                <Input type="text" id="newSurname" placeholder="Введите фамилию" />
                <Label htmlFor="newPassword">Пароль</Label>
                <Input type="password" id="newPassword" placeholder="Введите пароль" />
                <Button name="Зарегистрироваться" />
            </Form>
        </FormContainer>
    );
};

export default SignUp;

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
