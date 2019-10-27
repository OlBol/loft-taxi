import React from 'react';
import styles from 'styled-components';
import Logo from '../shared/Logo';
import Heading from '../shared/Heading';
import bg from '../../assets/images/bg.png';

const Wrapper = styles.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const FormContainer = styles.div`
    margin-left: 200px;
    width: 500px;
    padding: 60px 50px;
    background-color: #fff;
    
    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

const Text = styles.div`
    margin-bottom: 40px;
`;

const Button = styles.button`
    color: #1473e6;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
`;

const Label = styles.label`
    margin-bottom: 8px;
    display: block;
    color: #747474;
    font-size: 15px;
    font-weight: 400;
`;

const Form = styles.form`
    display: flex;
    flex-direction: column;
`;

const Input = styles.input`
    margin-bottom: 40px;
    width: 100%;
    padding: 8px 0;
    font-size: 16px;
    border: 0;
    border-bottom: 2px solid #eaeaea;
    transition: border-color 0.4s;
    
    &:hover {
        border-color: #1473e6;
    }
          
    &:focus {
        outline: none;
        border-color: #1473e6;
    }
`;

const Submit = styles.button`
    align-self: flex-end;
    padding: 15px 50px;
    font-size: 21px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background-color: #ffc617;
`;

const SingUp = ({ setPage }) => {
    const submitForm = e => {
        e.preventDefault();
        setPage('map');
    };

    const showLogInPage = () => setPage('login');

    return (
        <>
            <Wrapper>
                <Logo />
                <FormContainer>
                    <Heading title="Войти" />
                    <Text>
                        Уже зарегистрирован?&nbsp;
                        <Button onClick={showLogInPage}>Войти</Button>
                    </Text>
                    <Form onSubmit={submitForm}>
                        <Label htmlFor="newEmail">Адрес электронной почты</Label>
                        <Input type="email" id="newEmail" placeholder="Введите адрес" />
                        <Label htmlFor="newName">Имя</Label>
                        <Input type="text" id="newName" placeholder="Введите имя" />
                        <Label htmlFor="newSurname">Фамилия</Label>
                        <Input type="text" id="newSurname" placeholder="Введите фамилию" />
                        <Label htmlFor="newPassword">Пароль</Label>
                        <Input type="password" id="newPassword" placeholder="Введите пароль" />
                        <Submit type="submit">Зарегистрироваться</Submit>
                    </Form>
                </FormContainer>
            </Wrapper>
        </>
    );
};

export default SingUp;
